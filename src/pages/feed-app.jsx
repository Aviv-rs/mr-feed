import { CommentAdd } from "../cmps/comment-add"
import { CommentSection } from "../cmps/comment-section"
import { CommentFilter } from "../cmps/comment-filter"
export const FeedApp = () => {
    return <section className="feed-app flex align-center column">
        <h1 className="app-title">Mister Feed</h1>
        <section className="main-container flex column">
            <CommentAdd />
            {/* <CommentFilter /> */}
            <CommentSection />
        </section>
    </section>
}