import { describe, it, expect } from 'vitest';
import Login from "../components/Login.jsx";
import { render, screen } from "@testing-library/react";

describe('login page is set up', () => {
    render(<Login/>);
    it('renders login headline', () => {

        expect(screen.getByRole("heading").textContent).toMatch(/Login/i);
    })

    it('login has input with username and password', () => {
        expect(screen.getByLabelText("Username:")).toBeTruthy();
        expect(screen.getByRole("textbox", { name: "Username:"})).toBeTruthy();
        expect(screen.getByRole("textbox", { name: "Password:"})).toBeTruthy();
    })
})