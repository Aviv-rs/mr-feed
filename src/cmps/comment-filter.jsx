import { useState } from 'react'

export const CommentFilter = () => {

    const [filterBy, setFilterBy] = useState({ txt: '' })

    const handleChange = ({ target: { name, value } }) => {
        setFilterBy(prevFilterBy => ({ ...prevFilterBy, [name]: value }))
    }

    return (
        <section className="comment-filter">
            <form>
                <label htmlFor="txt">
                    <input
                        className="comment-search"
                        autoComplete="off"
                        placeholder="Filter"
                        name="txt"
                        onChange={handleChange}
                        type="search"
                    />
                </label>
            </form>
        </section>
    )

}
