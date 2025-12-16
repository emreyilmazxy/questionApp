import './question-card.css';
import { Button } from '../buttons';

type QuestionCardProps = {
    image: string;
    question: string;
    options: string[];
    onAnswer: (answer: string) => void;
    timeLeft: number;
    optionsVisible: boolean;
    questionNumber: number;
    totalQuestions: number;
}

const QuestionCard = ({
    image,
    question,
    options,
    onAnswer,
    timeLeft,
    optionsVisible,
    questionNumber,
    totalQuestions
}: QuestionCardProps) => {
    const isTimeLow = timeLeft <= 10;

    return (
        <div className="question-card">
            <div className="question-header">
                <span className="question-counter">
                    Soru {questionNumber}/{totalQuestions}
                </span>
                <span className={`timer ${isTimeLow ? 'timer-low' : ''}`}>
                    ⏱️ {timeLeft}s
                </span>
            </div>

            <div className="img-wrapper">
                <img src={image} alt="" />
            </div>

            <h1 className="question-title">{question}</h1>

            <div className="options">
                {optionsVisible ? (
                    options.map((option, index) => (
                        <Button
                            key={index}
                            variant="option"
                            onClick={() => onAnswer(option)}
                        >
                            {option}
                        </Button>
                    ))
                ) : (
                    <div className="options-loading">
                        <p>Şıklar hazırlanıyor... ({Math.max(0, 4 - (30 - timeLeft))}s)</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default QuestionCard;
