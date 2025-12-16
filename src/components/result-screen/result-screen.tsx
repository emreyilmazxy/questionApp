import './result-screen.css';

type ResultScreenProps = {
    correct: number;
    wrong: number;
    empty: number;
    total: number;
    onRestart: () => void;
}

const ResultScreen = ({ correct, wrong, empty, total, onRestart }: ResultScreenProps) => {
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

            <button className="restart-btn" onClick={onRestart}>
                Tekrar Dene
            </button>
        </div>
    );
}

export default ResultScreen;
