import toast from "react-hot-toast";

const getBooking = () => {
    const lower = localStorage.getItem('lower');
    if (lower) {
        return JSON.parse(lower)
    }
    else {
        return []
    }
}

const setBooking = (book) => {
    const booking = getBooking();
    const isExist = booking.find(b => b.id === book.id)
    if (isExist) {
        toast.error('Already Added')
    }
    else {
        booking.push(book)
        localStorage.setItem('lower', JSON.stringify(booking))
    }
}

export { setBooking ,getBooking}