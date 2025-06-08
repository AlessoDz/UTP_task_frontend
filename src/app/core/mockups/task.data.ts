export class TasksData {
  public tasks = [
    {
      id: 1,
      title: "Desarrollar la lógica de la aplicación",
      description: "Implementar la lógica de la aplicación para procesar los datos de la base de datos.",
      priority: "Alta",
      createdAt: "2025-06-07T01:00:00",
      updatedAt: "2025-06-07T01:40:00",
      startDate: "2025-05-07T09:00:00",
      dueDate: "2025-05-07T10:30:00",
      creator: {
        id: 1,
        name: "Andrea Lucía Esmeralda Huaro Enriquez",
        photo: "https://class.utp.edu.pe/static/media/student.42525dea.svg"
      },
      status: "Por Hacer",
      type: "Personal",
      group: {
        name: "Los Devminds",
        leader: {
          id: 7,
          name: "Laura Sánchez",
          photo: "https://class.utp.edu.pe/static/media/student.42525dea.svg"
        },
        members: [
          {
            id: 8,
            name: "Marcio Alessandro De La Cruz Capuñay",
            role: "Miembro",
            photo: "https://class.utp.edu.pe/static/media/student.42525dea.svg"
          },
          {
            id: 9,
            name: "Marianela Lizeth Santisteban Pisfil",
            role: "Miembro",
            photo: "https://class.utp.edu.pe/static/media/student.42525dea.svg"
          },
          {
            id: 8,
            name: "Santiago Imanol Dávila Capuñay",
            role: "Miembro",
            photo: "https://class.utp.edu.pe/static/media/student.42525dea.svg"
          },
          {
            id: 8,
            name: "JoseMaria Túllume Capuñay",
            role: "Miembro",
            photo: "https://class.utp.edu.pe/static/media/student.42525dea.svg"
          },
        ]
      },
      links: [
        {
          id: 1,
          name: "Link de datase.io",
          photo: "https://www.example.com/lab-guide"
        }
      ],
      comments: [
        {
          user: {
            id: 8,
            name: "Marcio Alessandro De La Cruz Capuñay",
            photo: "https://class.utp.edu.pe/static/media/student.42525dea.svg"
          },
          comment: "No olvides incluir documentar el estándar de base de datos."
        }
      ],
      reminder: true,
      progress: false,
      progressActual: null,
      total: null
    },
    {
      id: 2,
      title: "Maquetar la base de datos de la aplicación",
      description: "Crear la estructura de la base de datos para almacenar los datos de la aplicación.",
      priority: "Alta",
      createdAt: "2025-06-07T01:00:00",
      updatedAt: "2025-06-07T01:40:00",
      startDate: "2025-05-07T09:00:00",
      dueDate: "2025-05-07T10:30:00",
      creator: {
        id: 1,
        name: "Andrea Lucía Esmeralda Huaro Enriquez",
        photo: "https://class.utp.edu.pe/static/media/student.42525dea.svg"
      },
      status: "En Progreso",
      type: "Personal",
      group: {
        name: "Los Devminds",
        leader: {
          id: 7,
          name: "Andrea Lucía Esmeralda Huaro Enriquez",
          photo: "https://class.utp.edu.pe/static/media/student.42525dea.svg"
        },
        members: [
          {
            id: 8,
            name: "Marcio Alessandro De La Cruz Capuñay",
            role: "Miembro",
            photo: "https://class.utp.edu.pe/static/media/student.42525dea.svg"
          },
          {
            id: 9,
            name: "Marianela Lizeth Santisteban Pisfil",
            role: "Miembro",
            photo: "https://class.utp.edu.pe/static/media/student.42525dea.svg"
          },
          {
            id: 8,
            name: "Santiago Imanol Dávila Capuñay",
            role: "Miembro",
            photo: "https://class.utp.edu.pe/static/media/student.42525dea.svg"
          },
          {
            id: 8,
            name: "JoseMaria Túllume Capuñay",
            role: "Miembro",
            photo: "https://class.utp.edu.pe/static/media/student.42525dea.svg"
          },
        ]
      },
      links: [],
      comments: [],
      reminder: false,
      progress: false,
      progressActual: null,
      total: null
    },
    {
      id: 3,
      title: "Practicar ejercicios de programación",
      description: "Resolver problemas en JavaScript sobre estructuras de datos.",
      priority: "Baja",
      createdAt: "2025-06-07T01:00:00",
      updatedAt: "2025-06-07T01:40:00",
      startDate: "2025-05-08T09:00:00",
      dueDate: "2025-05-08T10:30:00",
      creator: {
        id: 1,
        name: "Marcio Alessandro De La Cruz Capuñay",
        photo: "https://class.utp.edu.pe/static/media/student.42525dea.svg"
      },
      status: "En Progreso",
      type: "Personal",
      group: null,
      links: [],
      comments: [
        {
          user: {
            id: 8,
            name: "Marcio Alessandro De La Cruz Capuñay",
            photo: "https://class.utp.edu.pe/static/media/student.42525dea.svg"
          },
          comment: "Revisar los algoritmos de búsqueda."
        }
      ],
      reminder: false,
      progress: false,
      progressActual: null,
      total: null
    }
  ];
}
