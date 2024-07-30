import { render, screen } from '@testing-library/react';
import TestWithMockData from './TestWithMockData';
import userEvent from '@testing-library/user-event';

const mockData= [
    {
        "id": 1,
        "first_name": "Parag",
        "last_name" : "Joshi",
        "email" : "par@gmail.com"
    },
    {
        "id": 2,
        "first_name": "Prachi",
        "last_name" : "Joshi",
        "email" : "pra@gmail.com"
    }
]


test('List Renders Successfully', () => {
    render(<TestWithMockData data={mockData}/>)
    expect(screen.getByText(/Parag/i)).toBeInTheDocument();
});

test ('Email link is clicked', async()=>{
    const mockHandleClick = jest.fn();
    render(<TestWithMockData data={mockData} handleClick={mockHandleClick}
        />
    )
    await userEvent.click(screen.getByText(/par@gmail.com/i))
    expect(mockHandleClick).toHaveBeenCalled()
})