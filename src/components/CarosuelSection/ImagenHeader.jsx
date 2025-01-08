import {Typography} from "@material-tailwind/react";
const ImagenHeader = () => {
  return (
    <figure className="relative h-full w-full">
      <img
        className=" object-cover object-center"
        src="/background.jpg"
        alt="nature image"
      />
      <figcaption className="absolute bottom-7 sm:bottom-2/3 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-center rounded-xl py-4 px-6">
        <div>
          <Typography variant="h1" color="white" className="text-2xl text-center font-bold sm:text-2xl md:text-4xl">
            Bienvenido a nuestro Sistema de Asistencia
          </Typography>
          <Typography variant="h2" color="white" className="mt-2 text-base font-normal text-center sm:text-2xl md:text-4xl">
            Gestiona tu asistencia de manera eficiente
          </Typography>
        </div>
      </figcaption>
    </figure>
  );
}
export default ImagenHeader;