import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'
import App from './App'

describe('App', () => {
    it('renders hello world', () => {
        // ARRANGE
        render(<App />)
        // ACT
        // EXPECT
        expect(screen.getByRole('heading', {
            level: 1
        })).toHaveTextContent('Template is installed!')
    })
})
