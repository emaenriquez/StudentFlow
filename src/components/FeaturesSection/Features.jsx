import { Typography } from "@material-tailwind/react";
import { FaClock, FaLaptop, FaChartBar, FaBell } from "react-icons/fa";

const Features = () => {
  return (
    <section className="py-8">
      <Typography variant="h2" className="text-center mb-4">
        Funcionalidades
      </Typography>
      <Typography variant="h5" className="text-center mb-8">
        Descubre las características de nuestro sistema
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center">
          <FaClock size={40} className="mb-2" />
          <Typography variant="h6" className="mb-1">
            Registro de horario
          </Typography>
          <Typography variant="body2">
            Control preciso de nuestro sistema
          </Typography>
        </div>
        <div className="flex flex-col items-center">
          <FaLaptop size={40} className="mb-2" />
          <Typography variant="h6" className="mb-1">
            Acceso remoto
          </Typography>
          <Typography variant="body2">
            Gestión desde cualquier lugar
          </Typography>
        </div>
        <div className="flex flex-col items-center">
          <FaChartBar size={40} className="mb-2" />
          <Typography variant="h6" className="mb-1">
            Reportes detallados
          </Typography>
          <Typography variant="body2">
            Visualización de datos
          </Typography>
        </div>
        <div className="flex flex-col items-center">
          <FaBell size={40} className="mb-2" />
          <Typography variant="h6" className="mb-1">
            Recordatorios automáticos
          </Typography>
          <Typography variant="body2">
            Agilización de la comunicación
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default Features;