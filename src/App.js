import React from 'react';
import IdCard from './componentes/IdCard/IdCard';
import Greetings from './componentes/Greetings/Greetings';
import Random from './componentes/Random/Random';
import BoxColor from './componentes/BoxColor/BoxColor';
import CreditCard from './componentes/CreditCard/CreditCard';
import Rating from './componentes/Rating/Rating';
import DriverCard from './componentes/DriverCard/DriverCard';
import LikeButton from './componentes/LikeButton/LikeButton';
import ClickablePicture from './componentes/ClickablePicture/ClickablePicture';
import Dice from './componentes/Dice/Dice';
import Carousel from './componentes/Carousel/Carousel';
import NumbersTable from './componentes/NumbersTable/NumbersTable';
import FaceBook from './componentes/FaceBook/FaceBook';
import SignupPage from './componentes/SignupPage/SignupPage';

function App() {
  return (
    <>
      <div>
        <h1>IdCard</h1>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />        
        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
      <hr />
      <div>
        <Greetings language="">Guilherme</Greetings>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>
      <hr />
      <div>
        <Random min={10} max={100} />
      </div>
      <hr />
      <div>
        <h1>BoxColor</h1>
        <BoxColor r={255} g={0} b={0}>
          rgb (255,0,0)
        </BoxColor>
        <hr />
        <BoxColor r={128} g={255} b={0}>
          rgb (128,255,0)
        </BoxColor>
      </div>
      <hr />
      <div>
        <h1>Credit Card</h1>
      </div>
      <div className="credit-card-container">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
      <hr />
      <div>
        <h1>Rating</h1>
        <div>
          <Rating>0</Rating>
          <Rating>1.49</Rating>
          <Rating>1.5</Rating>
          <Rating>3</Rating>
          <Rating>4</Rating>
          <Rating>5</Rating>
        </div>
        <div>
        <hr />
          <h1>DriverCard</h1>
          <div>
            <DriverCard
              name="Travis Kalanick"
              rating={4.2}
              img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
              car={{
                model: 'Toyota Corolla Altis',
                licensePlate: 'CO42DE',
              }}
            />
            <DriverCard
              name="Dara Khosrowshahi"
              rating={4.9}
              img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
              car={{
                model: 'Audi A3',
                licensePlate: 'BE33ER',
              }}
            />
          </div>
        </div>
        <hr />
      </div>      
      <div><LikeButton /></div>    
      <hr />
      <div>
        <ClickablePicture
          img="./img/persons/maxence.png"
          imgClicked="./img/persons/maxence-glasses.png"
        />
      </div>
      <hr />
      <Dice />   

      <div>
      <hr />
      <Carousel
  imgs={[
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
  ]}
/> <hr />
      </div>      
      <div> 
      <NumbersTable limit={12} />
      </div>
      <div>
        <hr />
      </div>
      <div>
      <FaceBook />
      </div>
      <hr />
      <SignupPage />
    </>
  );
}

export default App;