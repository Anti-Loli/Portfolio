import WorkButton from '../components/WorkButton';

export default function Work(){
    return (
    <div>
     
     <main className="flex justify-center items-center h-screen">
       <WorkButton
        href = "/links"
        imageSource="/BurgerWBPic.png"
        name="Bald Eagle Burgers"
        engine="Unreal Engine 5"
        date="7/5/2024"
      />

      <WorkButton
        href = "/links"
        imageSource="/ChoasWBPic.jpg"
        name="Choas at Circus Baby's"
        engine="Unreal Engine 5"
        date="1/10/2024"
      />

      <WorkButton
        href = "/Talimentals"
        imageSource="/TalimentalsWBPic.png"
        name="Talimentals"
        engine="Unity"
        date="12/8/2022"
      />

      <WorkButton
        href = "/links"
        imageSource="/GamderWBPic.png"
        name="Gamder"
        engine="React Native"
        date="5/2/23"
      />

      <WorkButton
        href = "/links"
        imageSource="/TimeForceWBPic.png"
        name="Power Rangers: Quantum Quest"
        engine="Unity"
        date="2/22/23"
      />
     </main>
    </div>
  );
}