import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSaveModuleResponsesMutation } from '@/redux/features/questionnaireApiSlice';
import { toast } from 'react-toastify';

export default function useSubmitResponses() {
    const router = useRouter();
    const [saveModuleResponses, { isLoading }] = useSaveModuleResponsesMutation();
    const [responses, setResponses] = useState<Record<number, number>>({});

    const handleResponseChange = (questionID: number, selectedOption: number) => {
        setResponses((prev) => ({
            ...prev,
            [questionID]: selectedOption,
        }));
    };

    const handleSubmitResponses = async (moduleName: string) => {
        const formattedResponses = Object.entries(responses).map(([questionID, selectedOption]) => ({
            perguntaId: parseInt(questionID, 10),
            valor: selectedOption + 1,
        }));

        try {
            await saveModuleResponses({
                nomeModulo: moduleName,
                respostas: formattedResponses,
            }).unwrap();
            toast.success('Respostas enviadas com sucesso!');
            router.push('/questionnaire');
        } catch (error) {
            toast.error('Erro ao enviar respostas');
            console.error('Erro ao enviar respostas:', error);
        }
    };

    return {
        responses,
        isLoading,
        handleResponseChange,
        handleSubmitResponses,
    };
}