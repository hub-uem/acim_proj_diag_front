'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function ModeToggle() {
    const { setTheme } = useTheme()

    return (
        <button className=' rounded-full p-2 blue border border-black-wash dark:border-zinc-50 hover:bg-zinc-300 dark:hover:bg-zinc-600'>
            <span className='sr-only'>Mudar Tema</span>
            <Sun
                className='text-zinc-900 dark:text-zinc-100 hidden dark:block'
                onClick={() => setTheme('light')}
            />
            <Moon
                className='text-zinc-900 dark:text-zinc-100 dark:hidden'
                onClick={() => setTheme('dark')}
            />
        </button>
    )
}
