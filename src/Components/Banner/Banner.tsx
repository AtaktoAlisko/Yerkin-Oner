import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-full h-auto bg-slate-500 ">
      <div className="flex justify-between items-center ml-10 ">
        <div className="flex-col ">
          <div className="text-3xl mb-10">
            <p>Еркін сөйле</p>
            <p>Еркің ойла</p>
            <p>Еркін бол!</p>
          </div>
          <div className="mb-10">
            <p>
              Біздің курстарымыз сізге дебат әлемінде сенімді сөйлеу мен дұрыс
              ойлау дағдыларын үйретеді
            </p>
            <p>
              Қазақстанның ең үздік университеттерінің тәжірибелі мамандарынан
              дәріс алыңыз
            </p>
          </div>
          <button className="cursor-pointer">Курсқа тіркелу</button>
        </div>

        <div className="">
          <Image src="/Banner/Banner.png" alt="" width={500} height={500} />
        </div>
      </div>
    </div>
  );
}
