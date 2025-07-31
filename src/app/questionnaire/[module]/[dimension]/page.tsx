'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useSubmitResponses } from '@/hooks';
import useSaveResponsesIncomplete from '@/hooks/use-save-responses-incomplete';
import { useGetQuestionnaireByModuleQuery, useDownloadReportMutation } from '@/redux/features/questionnaireApiSlice';
import { QuestionWithLikert } from '@/components/questionnaire';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Page() {
    const { dimension: moduleName } = useParams();
    const { data: moduleData, isLoading, isError, refetch } = useGetQuestionnaireByModuleQuery(moduleName as string, {
        skip: !moduleName,
        refetchOnMountOrArgChange: true
    });
    const [currentDimensionIndex, setCurrentDimensionIndex] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showDescription, setShowDescription] = useState(true);
    const [showSubmit, setShowSubmit] = useState(false);
    const { responses, setResponses, handleResponseChange, handleSubmitResponses } = useSubmitResponses();
    const [completedIndices, setCompletedIndices] = useState<number[]>([]);
    const { saveResponsesIncomplete } = useSaveResponsesIncomplete();

    useEffect(() => {
        if (moduleName) {
            refetch(); 
        }
    }, [moduleName, refetch]);

    useEffect(() => {

        if (!moduleData) return;

        const respondidas = (moduleData as any).respondidas || [];

        const indicesRespondidas = moduleData.dimensoes
            .map((dim: any, idx: number) => respondidas.includes(dim.dimensaoTitulo) ? idx : null)
            .filter((idx: number | null) => idx !== null) as number[];

        setCompletedIndices(indicesRespondidas);

        const respostasIncompletas = (moduleData as any).respostasIncompletas || {};
        let respostasAntigas: Record<number, number> = {};
        Object.values(respostasIncompletas).forEach((dim: any) => {
            if (dim.respostas) {
                dim.respostas.forEach((r: any) => {
                    const perguntaId = r.perguntaId ?? r.id;
                    respostasAntigas[perguntaId] = r.valor;
                });
            }
        });
        setResponses(respostasAntigas);

        if (typeof (moduleData as any).nextDimensionIndex === 'number') {
            setCurrentDimensionIndex((moduleData as any).nextDimensionIndex);
            setCurrentQuestionIndex(0);
            setShowDescription(true);
        }

    }, [moduleData]);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading module data.</div>;
    if (!moduleData) return <div>Module not found.</div>;

    const dimensions = moduleData.dimensoes.map((dimension) => ({
        title: dimension.dimensaoTitulo,
        description: dimension.descricao,
        questions: dimension.perguntas.map((question) => ({
            id: question.id,
            text: question.pergunta,
            explanation: question.explicacao,
        })),
    }));

    const totalDimensions = dimensions.length;
    const currentDimension = dimensions[currentDimensionIndex];
    const totalQuestionsInDimension = currentDimension.questions.length;
    const currentQuestion = currentDimension.questions[currentQuestionIndex];

    const isFirstQuestion = currentDimensionIndex === 0 && currentQuestionIndex === 0 && showDescription;

    const handleFinishDimension = async () => {
        await saveResponsesIncomplete(
            moduleName as string,
            currentDimension,
            responses
        );
        setCompletedIndices((prev) => [...new Set([...prev, currentDimensionIndex])]);
        setShowDescription(true);
    };

    const goToNext = () => {
        if (showDescription && currentQuestionIndex < totalQuestionsInDimension) {
            setShowDescription(false);
        } else if (currentQuestionIndex < totalQuestionsInDimension - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
        } else if (currentDimensionIndex < totalDimensions - 1) {
            handleFinishDimension();
            setCurrentDimensionIndex((prev) => prev + 1);
            setCurrentQuestionIndex(0);
            setShowDescription(true);
        } else if (currentDimensionIndex === totalDimensions - 1) {
            setCompletedIndices((prev) => [...new Set([...prev, currentDimensionIndex])]);
            setShowSubmit(true);
        }
    };

    const goToPrevious = () => {
        if (!showDescription && currentQuestionIndex === 0) {
            setShowDescription(true);
        } else if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex((prev) => prev - 1);
        } else if (currentDimensionIndex > 0) {
            const newIndex = currentDimensionIndex - 1;
            setCompletedIndices((prev) => prev.filter((i) => i !== newIndex));
            setCurrentDimensionIndex(newIndex);
            const previousDimension = dimensions[newIndex];
            if (previousDimension.questions.length > 0) {
                setCurrentQuestionIndex(previousDimension.questions.length - 1);
                setShowDescription(false);
            } else {
                setCurrentQuestionIndex(0);
                setShowDescription(true);
            }
        }
    };

    const currentResponse = responses[currentQuestion.id];

    const DescriptionView = () => (
        <div className='flex flex-col items-center px-3 py-10 sm:px-6 md:px-10'>
            <div className='relative flex w-full items-center justify-center mb-16'>
                <div className='absolute left-[-24px]'>
                    {currentDimensionIndex > 0 && (
                        <NavigationButton onClick={goToPrevious} position='left' size='sm' />
                    )}
                </div>
                <h2 className='text-3xl sm:text-3xl md:text-5xl font-extrabold text-royal-blue dark:text-gray-light text-center'>
                    {currentDimension.title}
                </h2>
            </div>
            <p className='mb-16 text-sm md:text-xl text-justify'>{currentDimension.description}</p>
            <button
                className='px-6 py-3 bg-teal hover:bg-teal-secundary-opc dark:bg-teal-primary dark:hover:bg-teal-primary-opc rounded-md text-bleached-silk'
                onClick={goToNext}
            >
                Iniciar
            </button>
        </div>
    );

    const QuestionView = () => (
        <div>
            <div className='text-center text-teal dark:text-bleached-silk'>
                Questão {currentQuestionIndex + 1} de {totalQuestionsInDimension}
            </div>
            <div className='py-16 px-3 sm:px-8 md:px-12 max-w-4xl mx-auto'>
                <QuestionWithLikert
                    question={currentQuestion.text}
                    numOptions={5}
                    selectedOption={currentResponse}
                    setSelectedOption={(option) => handleResponseChange(currentQuestion.id, option)}
                />
            </div>
            <div className='flex justify-end space-x-3'>
                <NavigationButton
                    onClick={goToPrevious}
                    position='left'
                    disabled={isFirstQuestion}
                />
                <NavigationButton
                    onClick={goToNext}
                    position='right'
                />
            </div>
        </div>
    );

    const SubmitView = () => {
        const [downloadReport] = useDownloadReportMutation();

        const handleSubmitAndDownload = async () => {
            try {
                await handleSubmitResponses(moduleName as string, (moduleData as any).respostasIncompletas);

                const blob = await downloadReport('Diagnóstico Organizacional').unwrap();
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'relatorio_diagnostico_organizacional.pdf';
                document.body.appendChild(link);
                link.click();
                link.remove();
                window.URL.revokeObjectURL(url);
            } catch (error) {
                console.error('Erro ao enviar respostas ou baixar o relatório:', error);
            }
        };

        return (
            <div className='flex flex-col items-center px-3 py-10 sm:px-6 md:px-10'>
                <div className='rounded-full border-2 border-turquoise p-4 mb-8'>
                    <Check className='text-turquoise h-16 w-16' />
                </div>
                <h1 className='text-2xl sm:text-3xl md:text-5xl font-extrabold mb-16'> Questionário Finalizado! </h1>
                <button
                    className='px-6 py-3 bg-turquoise rounded-md text-black-wash'
                    onClick={handleSubmitAndDownload}
                >
                    Enviar Respostas e Baixar Relatório
                </button>
            </div>
        );
    };

    const NavigationButton = ({
        onClick,
        position,
        disabled = false,
        size = 'md',
    }: {
        onClick: () => void;
        position: 'left' | 'right';
        disabled?: boolean;
        size?: 'sm' | 'md' | 'lg';
    }) => {
        const sizeClasses = {
            sm: 'p-1 text-sm',
            md: 'p-2 text-base',
            lg: 'p-3 text-lg',
        };

        return (
            <button
                className={`rounded-full border ${sizeClasses[size]} border-teal text-teal hover:border-teal-secundary hover:text-teal-secundary dark:border-bleached-silk dark:text-bleached-silk dark:hover:border-hover-glow dark:hover:text-hover-glow`}
                onClick={onClick}
                disabled={disabled}
            >
                {position === 'left' ? <ChevronLeft /> : <ChevronRight />}
            </button>
        );
    };

    return (
        <div className='flex flex-col min-h-screen p-4 pt-32 sm:p-8 sm:pt-36 md:flex-row md:p-12 md:pt-40 bg-bleached-silk dark:bg-teal-secundary gap-6'>

            <div className='flex flex-col justify-center bg-teal-primary border border-teal p-4 md:w-1/3 dark:bg-teal'>
                <h2 className='text-3xl text-center mb-10 text-teal font-bold dark:text-white'>Histórico de preenchimento</h2>
                <div className="space-y-4">
                {dimensions.map((dimension, index) => {
                    const isCurrent = index === currentDimensionIndex;
                    const isCompleted = completedIndices.includes(index);

                    return (
                    <div key={index} className="flex items-center justify-between">
                        <p
                        className={`text-xl font-semibold pb-2 border-b-2 flex-1 ${
                            isCurrent
                            ? 'text-white border-teal-white dark:text-teal-primary dark:border-teal-primary'
                            : 'text-teal border-teal dark:text-white dark:border-white'
                        }`}
                        >
                        {dimension.title}
                        </p>
                        {isCompleted && (
                        <span className="ml-4 w-6 h-6 flex items-center justify-center rounded-full bg-teal text-white text-sm font-bold dark:bg-teal-primary">
                            ✓
                        </span>
                        )}
                    </div>
                    );
                })}
                </div>
            </div>

            {/* Div do Conteúdo (Description, Question, Submit) */}
            <div  className='flex flex-col items-center justify-center p-4 md:flex-1 mx-auto bg-teal-primary dark:bg-teal rounded-md border border-teal dark:border-black-wash'>
                {showSubmit
                ? <SubmitView />
                : (showDescription
                    ? <DescriptionView />
                    : <QuestionView />
                )
                }
            </div>
        </div>
    );
}