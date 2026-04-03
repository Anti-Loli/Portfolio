import WorkButton from '../components/WorkButton';

export default function Work(){
    return (
    <div>
     
     <main className="flex justify-center items-center h-screen">
      
      <WorkButton
        href = "/links"
        imageSource="/ProfilePicture.jpg"
        name="Magnum Opus"
        engine="Unity"
        date="Fall 2022"
      />

      <WorkButton
        href = "/links"
        imageSource="/Steven.jpg"
        name="Steven"
        engine="Unreal Engine 5"
        date="4/1/2026"
      />
     </main>
    </div>
  );
}