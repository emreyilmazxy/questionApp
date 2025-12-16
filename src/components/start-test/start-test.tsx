import './startTest.css';
import { Button } from '../buttons';

type StartTestProps = {
    onStart: () => void;
}

function StartTest({ onStart }: StartTestProps) {
    return (
        <div className='container'>
            <p className='test-text'>Bu test toplam 10 sorudan oluşmaktadır ve her soru ekranda en fazla 30 saniye boyunca görüntülenir.
                Sorular ekrana geldikten sonra ilk 4 saniye boyunca cevap seçenekleri görünmez.
                Bir cevap seçildiğinde ya da süre dolduğunda sistem otomatik olarak bir sonraki soruya geçer ve önceki sorulara geri dönülemez.

                Test tamamlandığında;

                Doğru,

                Yanlış

                ve Boş bırakılan soru sayıları detaylı olarak sonuç ekranında gösterilecektir.

                Hazırsan, dikkatini topla ve Teste Başla butonuna tıkla</p>

            <div className='test-btn'><Button onClick={onStart}>Teste Başla</Button></div>

        </div>
    );
}


export default StartTest;