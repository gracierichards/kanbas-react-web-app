import { useParams } from "react-router";
import { useSelector } from "react-redux";
export default function QuizDetails() {
    const { qid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    let this_quiz = quizzes.find((quiz : {_id: string}) => quiz._id === qid);
    return (
        <div>
        <h3 className = "mt-2 mb-4 ms-3">{this_quiz.title}</h3>

        {currentUser.role === "FACULTY" && <div>
        <button className="btn btn-secondary me-2">Preview</button><button className="btn btn-secondary">Edit</button><hr/>
        <div className="row">
            <div className="col-3"><span className="float-end"><strong>Quiz Type</strong></span></div>
            <div className="col-9">Graded Quiz</div>
        </div>
        <div className="row">
            <div className="col-3"><span className="float-end"><strong>Points</strong></span></div>
            <div className="col-9">29</div>
        </div>
        <div className="row">
            <div className="col-3"><span className="float-end"><strong>Assignment Group</strong></span></div>
            <div className="col-9">QUIZZES</div>
        </div>
        <div className="row">
            <div className="col-3"><span className="float-end"><strong>Shuffle Answers</strong></span></div>
            <div className="col-9">No</div>
        </div>
        <div className="row">
            <div className="col-3"><span className="float-end"><strong>Time Limit</strong></span></div>
            <div className="col-9">30 minutes</div>
        </div>
        <div className="row">
            <div className="col-3"><span className="float-end"><strong>Multiple Attempts</strong></span></div>
            <div className="col-9">No</div>
        </div>
        <div className="row">
            <div className="col-3"><span className="float-end"><strong>How Many Attempts</strong></span></div>
            <div className="col-9">1</div>
        </div>
        <div className="row">
            <div className="col-3"><span className="float-end"><strong>Show Correct Answers</strong></span></div>
            <div className="col-9">Immediately</div>
        </div>
        <div className="row">
            <div className="col-3"><span className="float-end"><strong>Access Code</strong></span></div>
            <div className="col-9"></div>
        </div>
        <div className="row">
            <div className="col-3"><span className="float-end"><strong>One Question at a Time</strong></span></div>
            <div className="col-9">Yes</div>
        </div>
        <div className="row">
            <div className="col-3"><span className="float-end"><strong>Webcam Required</strong></span></div>
            <div className="col-9">No</div>
        </div>
        <div className="row">
            <div className="col-3"><span className="float-end"><strong>Lock Questions after Answering</strong></span></div>
            <div className="col-9">No</div>
        </div>
        <div className="row">
            <div className="col-3"><span className="float-end"><strong>Due</strong></span></div>
            <div className="col-9"></div>
        </div>
        <div className="row">
            <div className="col-3"><span className="float-end"><strong>Available</strong></span></div>
            <div className="col-9">from {"{"}available date{"}"} until {"{"}close date{"}"}</div>
        </div></div>}
        {currentUser.role !== "FACULTY" && <div><button className="btn btn-danger ms-3">Begin Quiz</button></div>}
        </div>
    )
}