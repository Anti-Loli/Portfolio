import Button from "../components/Button";

export default function XboxProfile({ username }: { username: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 w-64">

      <div className="flex flex-row gap-2 mb-4">
        <Button className="w-12 h-8 bg-[#107C10] text-white rounded-lg cursor-pointer text-base text-base block m-3">
          .
        </Button>

        <Button href = "/about(personal)">
          .
        </Button>
      </div>
     

      <div className="flex flex-row gap-2 mb-4">      
        Green box

        Profile box
      </div>

    </div>


  );
}