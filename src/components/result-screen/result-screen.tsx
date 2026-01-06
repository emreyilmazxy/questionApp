import './result-screen.css';
import type { Question } from '../../questions';

type UserAnswer = {
    questionIndex: number;
    userAnswer: string | null;
    isCorrect: boolean;
}

type ResultScreenProps = {
    correct: number;
    wrong: number;
    empty: number;
    total: number;
    onRestart: () => void;
    questions: Question[];
    userAnswers: UserAnswer[];
}

const ResultScreen = ({ correct, wrong, empty, total, onRestart, questions, userAnswers }: ResultScreenProps) => {
    const score = Math.round((correct / total) * 100);

    return (
        <div className="result-screen">
            <h1 className="result-title">🎉 Test Tamamlandı!</h1>

            <div className="result-score">
                {score} Puan
            </div>

            <div className="result-stats">
                <div className="stat-item stat-item--correct">
                    <span className="stat-label">✅ Doğru</span>
                    <span className="stat-value">{correct}</span>
                </div>
                <div className="stat-item stat-item--wrong">
                    <span className="stat-label">❌ Yanlış</span>
                    <span className="stat-value">{wrong}</span>
                </div>
                <div className="stat-item stat-item--empty">
                    <span className="stat-label">⏭️ Boş</span>
                    <span className="stat-value">{empty}</span>
                </div>
            </div>

            <p>Toplam {total} sorudan {correct} tanesini doğru cevapladınız.</p>

            <div className="questions-review">
                <h2 className="review-title">📝 Soru Değerlendirmesi</h2>
                {userAnswers.map((answer, index) => {
                    const question = questions[answer.questionIndex];
                    return (
                        <div
                            key={index}
                            className={`question-review-item ${answer.userAnswer === null
                                ? 'question-review-item--empty'
                                : answer.isCorrect
                                    ? 'question-review-item--correct'
                                    : 'question-review-item--wrong'
                                }`}
                        >
                            <div className="question-review-header">
                                <span className="question-number">Soru {index + 1}</span>
                                <span className="question-status">
                                    {answer.userAnswer === null
                                        ? '⏭️ Boş'
                                        : answer.isCorrect
                                            ? '✅ Doğru'
                                            : '❌ Yanlış'}
                                </span>
                            </div>
                            <p className="question-text">{question.question}</p>
                            <div className="answer-info">
                                {answer.userAnswer !== null && (
                                    <p className="user-answer">
                                        <strong>Senin cevabın:</strong> {answer.userAnswer}
                                    </p>
                                )}
                                {!answer.isCorrect && (
                                    <p className="correct-answer">
                                        <strong>Doğru cevap:</strong> {question.answer}
                                    </p>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            <button className="restart-btn" onClick={onRestart}>
                Tekrar Dene
            </button>
        </div>
    );
}

export default ResultScreen;
