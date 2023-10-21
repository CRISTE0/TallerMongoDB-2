
use("Colegio");



db.Maestros.insertMany([
  {
    nombre: "Juan",
    edad: 28,
    añosEducando: 12,
    tel: 341,
    Cursos: {
      Nombre: "Matematicas",
      Dia: "Lunes y Miercoles",
      Aula: 30
    },
    Alumnos: [
      { aula: 13, numero: 22 },
      { aula: 32, numero: 32 },
      { aula: 42, numero: 27 }
    ]
  },
  {
    nombre: "Maria",
    edad: 35,
    añosEducando: 10,
    tel: 478,
    Cursos: {
      Nombre: "Ciencias Sociales",
      Dia: "Martes y Jueves",
      Aula: 28
    },
    Alumnos: [
      { aula: 21, numero: 19 },
      { aula: 37, numero: 31 },
      { aula: 45, numero: 24 }
    ]
  },
  {
    nombre: "Pedro",
    edad: 40,
    añosEducando: 15,
    tel: 589,
    Cursos: {
      Nombre: "Biología",
      Dia: "Lunes y Miercoles",
      Aula: 33
    },
    Alumnos: [
      { aula: 15, numero: 29 },
      { aula: 28, numero: 36 },
      { aula: 40, numero: 21 }
    ]
  },
  {
    nombre: "Ana",
    edad: 32,
    añosEducando: 8,
    tel: 632,
    Cursos: {
      Nombre: "Arte",
      Dia: "Martes y Jueves",
      Aula: 29
    },
    Alumnos: [
      { aula: 27, numero: 18 },
      { aula: 38, numero: 29 },
      { aula: 47, numero: 25 }
    ]
  },
  {
    nombre: "Luis",
    edad: 38,
    añosEducando: 11,
    tel: 745,
    Cursos: {
      Nombre: "Historia",
      Dia: "Lunes y Miercoles",
      Aula: 35
    },
    Alumnos: [
      { aula: 18, numero: 16 },
      { aula: 36, numero: 30 },
      { aula: 42, numero: 27 }
    ]
  },
  {
    nombre: "Diego",
    edad: 31,
    añosEducando: 7,
    tel: 821,
    Cursos: {
      Nombre: "Lengua y Literatura",
      Dia: "Martes y Jueves",
      Aula: 31
    },
    Alumnos: [
      { aula: 23, numero: 25 },
      { aula: 34, numero: 33 },
      { aula: 44, numero: 20 }
    ]
  },
  {
    nombre: "Sofia",
    edad: 36,
    añosEducando: 9,
    tel: 962,
    Cursos: {
      Nombre: "Física",
      Dia: "Lunes y Miercoles",
      Aula: 38
    },
    Alumnos: [
      { aula: 14, numero: 17 },
      { aula: 30, numero: 28 },
      { aula: 41, numero: 23 }
    ]
  },
  {
    nombre: "Javier",
    edad: 27,
    añosEducando: 6,
    tel: 187,
    Cursos: {
      Nombre: "Química",
      Dia: "Martes y Jueves",
      Aula: 37
    },
    Alumnos: [
      { aula: 25, numero: 22 },
      { aula: 39, numero: 35 },
      { aula: 49, numero: 26 }
    ]
  },
  {
    nombre: "Isabel",
    edad: 33,
    añosEducando: 11,
    tel: 309,
    Cursos: {
      Nombre: "Geografía",
      Dia: "Lunes y Miercoles",
      Aula: 34
    },
    Alumnos: [
      { aula: 20, numero: 18 },
      { aula: 35, numero: 30 },
      { aula: 43, numero: 22 }
    ]
  },
  {
    nombre: "Elena",
    edad: 30,
    añosEducando: 8,
    tel: 521,
    Cursos: {
      Nombre: "Matemáticas",
      Dia: "Martes y Jueves",
      Aula: 39
    },
    Alumnos: [
      { aula: 16, numero: 26 },
      { aula: 31, numero: 32 },
      { aula: 46, numero: 29 }
    ]
  },
  {
    nombre: "Andrés",
    edad: 34,
    añosEducando: 10,
    tel: 674,
    Cursos: {
      Nombre: "Ciencias Sociales",
      Dia: "Lunes y Miercoles",
      Aula: 30
    },
    Alumnos: [
      { aula: 21, numero: 21 },
      { aula: 33, numero: 33 },
      { aula: 42, numero: 28 }
    ]
  },
  {
    nombre: "Carlos",
    edad: 29,
    añosEducando: 7,
    tel: 836,
    Cursos: {
      Nombre: "Biología",
      Dia: "Martes y Jueves",
      Aula: 32
    },
    Alumnos: [
      { aula: 25, numero: 20 },
      { aula: 37, numero: 31 },
      { aula: 47, numero: 24 }
    ]
  },
  {
    nombre: "Laura",
    edad: 37,
    añosEducando: 11,
    tel: 964,
    Cursos: {
      Nombre: "Arte",
      Dia: "Lunes y Miercoles",
      Aula: 31
    },
    Alumnos: [
      { aula: 27, numero: 19 },
      { aula: 35, numero: 30 },
      { aula: 45, numero: 25 }
    ]
  },
  {
    nombre: "Miguel",
    edad: 26,
    añosEducando: 5,
    tel: 179,
    Cursos: {
      Nombre: "Historia",
      Dia: "Martes y Jueves",
      Aula: 33
    },
    Alumnos: [
      { aula: 14, numero: 16 },
      { aula: 29, numero: 28 },
      { aula: 40, numero: 23 }
    ]
  },
  {
    nombre: "Carmen",
    edad: 32,
    añosEducando: 9,
    tel: 264,
    Cursos: {
      Nombre: "Lengua y Literatura",
      Dia: "Lunes y Miercoles",
      Aula: 34
    },
    Alumnos: [
      { aula: 23, numero: 22 },
      { aula: 36, numero: 34 },
      { aula: 44, numero: 21 }
    ]
  },
  {
    nombre: "Antonio",
    edad: 35,
    añosEducando: 10,
    tel: 384,
    Cursos: {
      Nombre: "Física",
      Dia: "Martes y Jueves",
      Aula: 36
    },
    Alumnos: [
      { aula: 16, numero: 25 },
      { aula: 30, numero: 31 },
      { aula: 41, numero: 27 }
    ]
  },
  {
    nombre: "Eva",
    edad: 30,
    añosEducando: 8,
    tel: 562,
    Cursos: {
      Nombre: "Química",
      Dia: "Lunes y Miercoles",
      Aula: 37
    },
    Alumnos: [
      { aula: 25, numero: 18 },
      { aula: 37, numero: 29 },
      { aula: 45, numero: 22 }
    ]
  },
  {
    nombre: "Raul",
    edad: 36,
    añosEducando: 11,
    tel: 789,
    Cursos: {
      Nombre: "Geografía",
      Dia: "Martes y Jueves",
      Aula: 39
    },
    Alumnos: [
      { aula: 15, numero: 26 },
      { aula: 33, numero: 32 },
      { aula: 43, numero: 28 }
    ]
  },
  {
    nombre: "Alicia",
    edad: 28,
    añosEducando: 7,
    tel: 918,
    Cursos: {
      Nombre: "Matemáticas",
      Dia: "Lunes y Miercoles",
      Aula: 31
    },
    Alumnos: [
      { aula: 21, numero: 20 },
      { aula: 34, numero: 30 },
      { aula: 46, numero: 25 }
    ]
  },
  {
    nombre: "Pablo",
    edad: 33,
    añosEducando: 9,
    tel: 236,
    Cursos: {
      Nombre: "Ciencias Sociales",
      Dia: "Martes y Jueves",
      Aula: 33
    },
    Alumnos: [
      { aula: 23, numero: 19 },
      { aula: 35, numero: 31 },
      { aula: 42, numero: 23 }
    ]
  },
  {
    nombre: "María",
    edad: 31,
    añosEducando: 8,
    tel: 478,
    Cursos: {
      Nombre: "Biología",
      Dia: "Lunes y Miercoles",
      Aula: 35
    },
    Alumnos: [
      { aula: 16, numero: 22 },
      { aula: 29, numero: 32 },
      { aula: 41, numero: 27 }
    ]
  },
  {
    nombre: "Daniel",
    edad: 29,
    añosEducando: 7,
    tel: 621,
    Cursos: {
      Nombre: "Arte",
      Dia: "Martes y Jueves",
      Aula: 37
    },
    Alumnos: [
      { aula: 15, numero: 18 },
      { aula: 30, numero: 30 },
      { aula: 44, numero: 21 }
    ]
  },
  {
    nombre: "Marta",
    edad: 35,
    añosEducando: 10,
    tel: 782,
    Cursos: {
      Nombre: "Historia",
      Dia: "Lunes y Miercoles",
      Aula: 39
    },
    Alumnos: [
      { aula: 25, numero: 21 },
      { aula: 37, numero: 32 },
      { aula: 45, numero: 28 }
    ]
  },
  {
    nombre: "Diego",
    edad: 43,
    añosEducando: 20,
    tel: 345678,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Lunes y Miercoles",
        Aula: 23,
      },
    ],
  },
  {
    nombre: "Ana",
    edad: 39,
    añosEducando: 11,
    tel: 234567,
    Cursos: [
      {
        Nombre: "Geografia",
        Dia: "Martes y Jueves",
        Aula: 23,
      },
    ],
  },
  {
    nombre: "Carlos",
    edad: 44,
    añosEducando: 22,
    tel: 346577,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Lunes y Miercoles",
        Aula: 13,
      },
    ],
  },
  {
    nombre: "Sofia",
    edad: 38,
    añosEducando: 33,
    tel: 346790,
    Cursos: [
      {
        Nombre: "Economia",
        Dia: "Martes y Jueves",
        Aula: 13,
      },
    ],
  },
  {
    nombre: "Martin",
    edad: 45,
    añosEducando: 24,
    tel: 2345467,
    Cursos: [
      {
        Nombre: "Ciencias naturales",
        Dia: "Lunes y Miercoles",
        Aula: 13,
      },
    ],
  },
  {
    nombre: "Valentina",
    edad: 37,
    añosEducando: 15,
    tel: 324567,
    Cursos: [
      {
        Nombre: "Artistica",
        Dia: "Martes y Jueves",
        Aula: 13,
      },
    ],
  },
  {
    nombre: "Javier",
    edad: 46,
    añosEducando: 16,
    tel: 325678,
    Cursos: [
      {
        Nombre: "Español",
        Dia: "Lunes y Miercoles",
        Aula: 13,
      },
    ],
  },
  {
    nombre: "Lucas",
    edad: 39,
    añosEducando: 23,
    tel: 324565,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Martes y Jueves",
        Aula: 13,
      },
    ],
  },
  {
    nombre: "Paula",
    edad: 28,
    añosEducando: 3,
    tel: 123456,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Lunes y Miercoles",
        Aula: 13,
      },
    ],
  },
  {
    nombre: "Nicolas",
    edad: 40,
    añosEducando: 23,
    tel: 345676,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Martes y Jueves",
        Aula: 13,
      },
    ],
  },
  {
    nombre: "Valeria",
    edad: 48,
    añosEducando: 23,
    tel: 324576,
    Cursos: [
      {
        Nombre: "Ciencias naturales",
        Dia: "Lunes y Miercoles",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Santiago",
    edad: 41,
    añosEducando: 22,
    tel: 233245,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Martes y Jueves",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Isabella",
    edad: 37,
    añosEducando: 23,
    tel: 323454,
    Cursos: [
      {
        Nombre: "Español",
        Dia: "Lunes y Miercoles",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Dylan",
    edad: 42,
    añosEducando: 19,
    tel: 323465,
    Cursos: [
      {
        Nombre: "Artistica",
        Dia: "Martes y Jueves",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Emma",
    edad: 38,
    añosEducando: 18,
    tel: 657890,
    Cursos: [
      {
        Nombre: "Economia",
        Dia: "Lunes y Miercoles",
        Aula: 11,
      },
    ],
  },
  {
    nombre: "Alexander",
    edad: 43,
    añosEducando: 23,
    tel: 324567,
    Cursos: [
      {
        Nombre: "Geografia",
        Dia: "Martes y Jueves",
        Aula: 11,
      },
    ],
  },
  {
    nombre: "Victoria",
    edad: 39,
    añosEducando: 15,
    tel: 789076,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Lunes y Miercoles",
        Aula: 11,
      },
    ],
  },
  {
    nombre: "Sebastian",
    edad: 44,
    añosEducando: 12,
    tel: 324567,
    Cursos: [
      {
        Nombre: "Fisica",
        Dia: "Martes y Jueves",
        Aula: 11,
      },
    ],
  },
  //   60 DATOS
  {
    nombre: "Natalia",
    edad: 35,
    añosEducando: 5,
    tel: 123456,
    Cursos: [
      {
        Nombre: "Matematicas",
        Dia: "Lunes y Miercoles",
        Aula: 11,
      },
    ],
  },
  {
    nombre: "Alejandro",
    edad: 38,
    añosEducando: 6,
    tel: 890065,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Martes y Jueves",
        Aula: 11,
      },
    ],
  },
  {
    nombre: "Valeria",
    edad: 36,
    añosEducando: 7,
    tel: 789065,
    Cursos: [
      {
        Nombre: "Fisica",
        Dia: "Lunes y Miercoles",
        Aula: 11,
      },
    ],
  },
  {
    nombre: "Martin",
    edad: 37,
    añosEducando: 8,
    tel: 324565,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Martes y Jueves",
        Aula: 11,
      },
    ],
  },
  {
    nombre: "Sofia",
    edad: 38,
    añosEducando: 9,
    tel: 324565,
    Cursos: [
      {
        Nombre: "Educacion fisica",
        Dia: "Lunes y Miercoles",
        Aula: 11,
      },
    ],
  },
  {
    nombre: "Diego",
    edad: 39,
    añosEducando: 10,
    tel: 322456,
    Cursos: [
      {
        Nombre: "Ciencias naturales",
        Dia: "Martes y Jueves",
        Aula: 10,
      },
    ],
  },
  {
    nombre: "Elena",
    edad: 40,
    añosEducando: 11,
    tel: 433456,
    Cursos: [
      {
        Nombre: "Español",
        Dia: "Lunes y Miercoles",
        Aula: 10,
      },
    ],
  },
  {
    nombre: "Javier",
    edad: 41,
    añosEducando: 12,
    tel: 435678,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Martes y Jueves",
        Aula: 10,
      },
    ],
  },
  {
    nombre: "Lucia",
    edad: 42,
    añosEducando: 13,
    tel: 344334,
    Cursos: [
      {
        Nombre: "Economia",
        Dia: "Lunes y Miercoles",
        Aula: 10,
      },
    ],
  },
  {
    nombre: "Miguel",
    edad: 43,
    añosEducando: 14,
    tel: 3443546,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Martes y Jueves",
        Aula: 10,
      },
    ],
  },
  {
    nombre: "Isabella",
    edad: 44,
    añosEducando: 15,
    tel: 345467,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Lunes y Miercoles",
        Aula: 11,
      },
    ],
  },
  {
    nombre: "Santiago",
    edad: 45,
    añosEducando: 16,
    tel: 322345,
    Cursos: [
      {
        Nombre: "Geografia",
        Dia: "Martes y Jueves",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Valentina",
    edad: 46,
    añosEducando: 17,
    tel: 576789,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Lunes y Miercoles",
        Aula: 13,
      },
    ],
  },
  {
    nombre: "Lucas",
    edad: 21,
    añosEducando: 18,
    tel: 235665,
    Cursos: [
      {
        Nombre: "Economia",
        Dia: "Martes y Jueves",
        Aula: 14,
      },
    ],
  },
  {
    nombre: "Emma",
    edad: 48,
    añosEducando: 19,
    tel: 678900,
    Cursos: [
      {
        Nombre: "Fisica",
        Dia: "Lunes y Miercoles",
        Aula: 15,
      },
    ],
  },
  {
    nombre: "Alexander",
    edad: 49,
    añosEducando: 20,
    tel: 433456,
    Cursos: [
      {
        Nombre: "Matematicas",
        Dia: "Martes y Jueves",
        Aula: 16,
      },
    ],
  },
  {
    nombre: "Victoria",
    edad: 50,
    añosEducando: 21,
    tel: 655678,
    Cursos: [
      {
        Nombre: "Artistica",
        Dia: "Lunes y Miercoles",
        Aula: 17,
      },
    ],
  },
  {
    nombre: "Sebastian",
    edad: 51,
    añosEducando: 22,
    tel: 322456,
    Cursos: [
      {
        Nombre: "Español",
        Dia: "Martes y Jueves",
        Aula: 18,
      },
    ],
  },
  {
    nombre: "Isabella",
    edad: 52,
    añosEducando: 23,
    tel: 324577,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Lunes y Miercoles",
        Aula: 19,
      },
    ],
  },
  {
    nombre: "Lucas",
    edad: 53,
    añosEducando: 24,
    tel: 334455,
    Cursos: [
      {
        Nombre: "Ciencias naturales",
        Dia: "Martes y Jueves",
        Aula: 20,
      },
    ],
  },
  {
    nombre: "Emma",
    edad: 54,
    añosEducando: 25,
    tel: 456578,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Lunes y Miercoles",
        Aula: 21,
      },
    ],
  },
  {
    nombre: "Alexander",
    edad: 55,
    añosEducando: 26,
    tel: 322354,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Martes y Jueves",
        Aula: 22,
      },
    ],
  },
  //   80 DATOS
  {
    nombre: "Nicolas",
    edad: 56,
    añosEducando: 27,
    tel: 344356,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Martes y Jueves",
        Aula: 23,
      },
    ],
  },
  {
    nombre: "Valentina",
    edad: 57,
    añosEducando: 28,
    tel: 123456,
    Cursos: [
      {
        Nombre: "Fisica",
        Dia: "Lunes y Miercoles",
        Aula: 24,
      },
    ],
  },
  {
    nombre: "Sebastian",
    edad: 58,
    añosEducando: 29,
    tel: 900087,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Martes y Jueves",
        Aula: 25,
      },
    ],
  },
  {
    nombre: "Isabella",
    edad: 59,
    añosEducando: 30,
    tel: 545678,
    Cursos: [
      {
        Nombre: "Ciencias naturales",
        Dia: "Lunes y Miercoles",
        Aula: 26,
      },
    ],
  },
  {
    nombre: "Lucas",
    edad: 60,
    añosEducando: 31,
    tel: 433567,
    Cursos: [
      {
        Nombre: "Matematicas",
        Dia: "Martes y Jueves",
        Aula: 27,
      },
    ],
  },
  {
    nombre: "Emma",
    edad: 61,
    añosEducando: 32,
    tel: 323456,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Lunes y Miercoles",
        Aula: 28,
      },
    ],
  },
  {
    nombre: "Alexander",
    edad: 62,
    añosEducando: 33,
    tel: 346554,
    Cursos: [
      {
        Nombre: "Geografia",
        Dia: "Martes y Jueves",
        Aula: 29,
      },
    ],
  },
  {
    nombre: "Victoria",
    edad: 63,
    añosEducando: 34,
    tel: 435676,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Lunes y Miercoles",
        Aula: 30,
      },
    ],
  },
  {
    nombre: "Benjamin",
    edad: 64,
    añosEducando: 23,
    tel: 324567,
    Cursos: [
      {
        Nombre: "Artistica",
        Dia: "Martes y Jueves",
        Aula: 22,
      },
    ],
  },
  {
    nombre: "Valeria",
    edad: 65,
    añosEducando: 21,
    tel: 345476,
    Cursos: [
      {
        Nombre: "Español",
        Dia: "Lunes y Miercoles",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Martin",
    edad: 66,
    añosEducando: 12,
    tel: 435467,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Martes y Jueves",
        Aula: 20,
      },
    ],
  },
  {
    nombre: "Sofia",
    edad: 67,
    añosEducando: 22,
    tel: 324399,
    Cursos: [
      {
        Nombre: "Economia",
        Dia: "Lunes y Miercoles",
        Aula: 29,
      },
    ],
  },
  {
    nombre: "Diego",
    edad: 68,
    añosEducando: 20,
    tel: 434565,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Martes y Jueves",
        Aula: 27,
      },
    ],
  },
  {
    nombre: "Ana",
    edad: 69,
    añosEducando: 43,
    tel: 234356,
    Cursos: [
      {
        Nombre: "Geografia",
        Dia: "Lunes y Miercoles",
        Aula: 28,
      },
    ],
  },
  {
    nombre: "Carlos",
    edad: 70,
    añosEducando: 24,
    tel: 434565,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Martes y Jueves",
        Aula: 18,
      },
    ],
  },
  {
    nombre: "Lucia",
    edad: 71,
    añosEducando: 5,
    tel: 345467,
    Cursos: [
      {
        Nombre: "Economia",
        Dia: "Lunes y Miercoles",
        Aula: 16,
      },
    ],
  },
  {
    nombre: "Miguel",
    edad: 72,
    añosEducando: 15,
    tel: 345467,
    Cursos: [
      {
        Nombre: "Ciencias naturales",
        Dia: "Martes y Jueves",
        Aula: 27,
      },
    ],
  },
  {
    nombre: "Isabella",
    edad: 73,
    añosEducando: 15,
    tel: 345456,
    Cursos: [
      {
        Nombre: "Español",
        Dia: "Lunes y Miercoles",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Lucas",
    edad: 74,
    añosEducando: 22,
    tel: 345467,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Martes y Jueves",
        Aula: 19,
      },
    ],
  },
  {
    nombre: "Emma",
    edad: 75,
    añosEducando: 13,
    tel: 434576,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Lunes y Miercoles",
        Aula: 23,
      },
    ],
  },
  {
    nombre: "Alexander",
    edad: 46,
    añosEducando: 13,
    tel: 434567,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Martes y Jueves",
        Aula: 343,
      },
    ],
  },
  //   107 DATOS
  {
    nombre: "Valeria",
    edad: 35,
    añosEducando: 5,
    tel: 234567,
    Cursos: [
      {
        Nombre: "Matematicas",
        Dia: "Lunes y Miercoles",
        Aula: 23,
      },
    ],
  },
  {
    nombre: "Alejandro",
    edad: 38,
    añosEducando: 6,
    tel: 344577,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Martes y Jueves",
        Aula: 15,
      },
    ],
  },
  {
    nombre: "Nicolas",
    edad: 36,
    añosEducando: 7,
    tel: 324356,
    Cursos: [
      {
        Nombre: "Fisica",
        Dia: "Lunes y Miercoles",
        Aula: 23,
      },
    ],
  },
  {
    nombre: "Martin",
    edad: 37,
    añosEducando: 8,
    tel: 3465789,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Martes y Jueves",
        Aula: 23,
      },
    ],
  },
  {
    nombre: "Sofia",
    edad: 38,
    añosEducando: 9,
    tel: 239065,
    Cursos: [
      {
        Nombre: "Educacion fisica",
        Dia: "Lunes y Miercoles",
        Aula: 29,
      },
    ],
  },
  {
    nombre: "Diego",
    edad: 39,
    añosEducando: 10,
    tel: 212354,
    Cursos: [
      {
        Nombre: "Ciencias naturales",
        Dia: "Martes y Jueves",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Elena",
    edad: 40,
    añosEducando: 11,
    tel: 324566,
    Cursos: [
      {
        Nombre: "Español",
        Dia: "Lunes y Miercoles",
        Aula: 26,
      },
    ],
  },
  {
    nombre: "Javier",
    edad: 41,
    añosEducando: 12,
    tel: 433456,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Martes y Jueves",
        Aula: 23,
      },
    ],
  },
  {
    nombre: "Lucia",
    edad: 42,
    añosEducando: 13,
    tel: 434377,
    Cursos: [
      {
        Nombre: "Economia",
        Dia: "Lunes y Miercoles",
        Aula: 13,
      },
    ],
  },
  {
    nombre: "Miguel",
    edad: 43,
    añosEducando: 14,
    tel: 433456,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Martes y Jueves",
        Aula: 10,
      },
    ],
  },
  {
    nombre: "Isabella",
    edad: 44,
    añosEducando: 15,
    tel: 332476,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Lunes y Miercoles",
        Aula: 11,
      },
    ],
  },
  {
    nombre: "Lucas",
    edad: 45,
    añosEducando: 16,
    tel: 322345,
    Cursos: [
      {
        Nombre: "Geografia",
        Dia: "Martes y Jueves",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Emma",
    edad: 46,
    añosEducando: 17,
    tel: 433456,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Lunes y Miercoles",
        Aula: 13,
      },
    ],
  },
  {
    nombre: "Alexander",
    edad: 21,
    añosEducando: 18,
    tel: 345467,
    Cursos: [
      {
        Nombre: "Economia",
        Dia: "Martes y Jueves",
        Aula: 14,
      },
    ],
  },
  {
    nombre: "Victoria",
    edad: 48,
    añosEducando: 19,
    tel: 907668,
    Cursos: [
      {
        Nombre: "Fisica",
        Dia: "Lunes y Miercoles",
        Aula: 15,
      },
    ],
  },
  {
    nombre: "Benjamin",
    edad: 49,
    añosEducando: 20,
    tel: 123456,
    Cursos: [
      {
        Nombre: "Artistica",
        Dia: "Martes y Jueves",
        Aula: 16,
      },
    ],
  },
  {
    nombre: "Valeria",
    edad: 50,
    añosEducando: 21,
    tel: 545678,
    Cursos: [
      {
        Nombre: "Español",
        Dia: "Lunes y Miercoles",
        Aula: 17,
      },
    ],
  },
  {
    nombre: "Alejandro",
    edad: 51,
    añosEducando: 22,
    tel: 566578,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Martes y Jueves",
        Aula: 18,
      },
    ],
  },
  {
    nombre: "Nicolas",
    edad: 52,
    añosEducando: 23,
    tel: 322354,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Lunes y Miercoles",
        Aula: 19,
      },
    ],
  },
  {
    nombre: "Martin",
    edad: 53,
    añosEducando: 24,
    tel: 435678,
    Cursos: [
      {
        Nombre: "Geografia",
        Dia: "Martes y Jueves",
        Aula: 20,
      },
    ],
  },
  {
    nombre: "Sofia",
    edad: 54,
    añosEducando: 25,
    tel: 455665,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Lunes y Miercoles",
        Aula: 21,
      },
    ],
  },
  {
    nombre: "Diego",
    edad: 55,
    añosEducando: 26,
    tel: 434356,
    Cursos: [
      {
        Nombre: "Ciencias naturales",
        Dia: "Martes y Jueves",
        Aula: 22,
      },
    ],
  },
  {
    nombre: "Elena",
    edad: 56,
    añosEducando: 27,
    tel: 567689,
    Cursos: [
      {
        Nombre: "Matematicas",
        Dia: "Lunes y Miercoles",
        Aula: 23,
      },
    ],
  },
  {
    nombre: "Javier",
    edad: 57,
    añosEducando: 28,
    tel: 233245,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Martes y Jueves",
        Aula: 24,
      },
    ],
  },
  {
    nombre: "Lucia",
    edad: 58,
    añosEducando: 29,
    tel: 566578,
    Cursos: [
      {
        Nombre: "Fisica",
        Dia: "Lunes y Miercoles",
        Aula: 25,
      },
    ],
  },
  {
    nombre: "Miguel",
    edad: 59,
    añosEducando: 30,
    tel: 456578,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Martes y Jueves",
        Aula: 26,
      },
    ],
  },
  {
    nombre: "Emma",
    edad: 60,
    añosEducando: 31,
    tel: 678790,
    Cursos: [
      {
        Nombre: "Educacion fisica",
        Dia: "Lunes y Miercoles",
        Aula: 27,
      },
    ],
  },
  {
    nombre: "Alexander",
    edad: 61,
    añosEducando: 32,
    tel: 235467,
    Cursos: [
      {
        Nombre: "Ciencias naturales",
        Dia: "Martes y Jueves",
        Aula: 28,
      },
    ],
  },
  {
    nombre: "Victoria",
    edad: 62,
    añosEducando: 33,
    tel: 564321,
    Cursos: [
      {
        Nombre: "Español",
        Dia: "Lunes y Miercoles",
        Aula: 29,
      },
    ],
  },
  {
    nombre: "Benjamin",
    edad: 63,
    añosEducando: 34,
    tel: 567678,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Martes y Jueves",
        Aula: 30,
      },
    ],
  },
  {
    nombre: "Valeria",
    edad: 64,
    añosEducando: 35,
    tel: 654321,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Lunes y Miercoles",
        Aula: 28,
      },
    ],
  },
  {
    nombre: "Alejandro",
    edad: 65,
    añosEducando: 36,
    tel: 123456,
    Cursos: [
      {
        Nombre: "Economia",
        Dia: "Martes y Jueves",
        Aula: 28,
      },
    ],
  },
  {
    nombre: "Nicolas",
    edad: 66,
    añosEducando: 37,
    tel: 345467,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Lunes y Miercoles",
        Aula: 28,
      },
    ],
  },
  {
    nombre: "Martin",
    edad: 67,
    añosEducando: 38,
    tel: 344345,
    Cursos: [
      {
        Nombre: "Geografia",
        Dia: "Martes y Jueves",
        Aula: 28,
      },
    ],
  },
  {
    nombre: "Sofia",
    edad: 68,
    añosEducando: 39,
    tel: 324576,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Lunes y Miercoles",
        Aula: 28,
      },
    ],
  },
  {
    nombre: "Diego",
    edad: 69,
    añosEducando: 40,
    tel: 347689,
    Cursos: [
      {
        Nombre: "Artistica",
        Dia: "Martes y Jueves",
        Aula: 28,
      },
    ],
  },
  {
    nombre: "Elena",
    edad: 70,
    añosEducando: 41,
    tel: 433456,
    Cursos: [
      {
        Nombre: "Español",
        Dia: "Lunes y Miercoles",
        Aula: 28,
      },
    ],
  },
  {
    nombre: "Javier",
    edad: 71,
    añosEducando: 42,
    tel: 345456,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Martes y Jueves",
        Aula: 28,
      },
    ],
  },
  {
    nombre: "Lucia",
    edad: 72,
    añosEducando: 43,
    tel: 434565,
    Cursos: [
      {
        Nombre: "Economia",
        Dia: "Lunes y Miercoles",
        Aula: 28,
      },
    ],
  },

  // 146 DATOS
  {
    nombre: "Carlos",
    edad: 32,
    añosEducando: 2,
    tel: 346578,
    Cursos: [
      {
        Nombre: "Matematicas",
        Dia: "Lunes y Miercoles",
        Aula: 29,
      },
    ],
  },
  {
    nombre: "Juan",
    edad: 34,
    añosEducando: 4,
    tel: 234565,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Martes y Jueves",
        Aula: 29,
      },
    ],
  },
  {
    nombre: "Carlos",
    edad: 36,
    añosEducando: 6,
    tel: 346578,
    Cursos: [
      {
        Nombre: "Fisica",
        Dia: "Lunes y Miercoles",
        Aula: 29,
      },
    ],
  },
  {
    nombre: "Maria",
    edad: 38,
    añosEducando: 8,
    tel: 324567,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Martes y Jueves",
        Aula: 29,
      },
    ],
  },
  {
    nombre: "Carlos",
    edad: 40,
    añosEducando: 10,
    tel: 114587,
    Cursos: [
      {
        Nombre: "Educacion fisica",
        Dia: "Lunes y Miercoles",
        Aula: 29,
      },
    ],
  },
  {
    nombre: "Ana",
    edad: 42,
    añosEducando: 12,
    tel: 346578,
    Cursos: [
      {
        Nombre: "Ciencias naturales",
        Dia: "Martes y Jueves",
        Aula: 29,
      },
    ],
  },
  {
    nombre: "Juan",
    edad: 44,
    añosEducando: 14,
    tel: 346579,
    Cursos: [
      {
        Nombre: "Español",
        Dia: "Lunes y Miercoles",
        Aula: 29,
      },
    ],
  },
  {
    nombre: "Maria",
    edad: 46,
    añosEducando: 16,
    tel: 343245,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Martes y Jueves",
        Aula: 29,
      },
    ],
  },
  {
    nombre: "Carlos",
    edad: 48,
    añosEducando: 18,
    tel: 235467,
    Cursos: [
      {
        Nombre: "Economia",
        Dia: "Lunes y Miercoles",
        Aula: 29,
      },
    ],
  },
  {
    nombre: "Pedro",
    edad: 50,
    añosEducando: 20,
    tel: 907688,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Martes y Jueves",
        Aula: 10,
      },
    ],
  },
  {
    nombre: "Juan",
    edad: 52,
    añosEducando: 22,
    tel: 236677,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Lunes y Miercoles",
        Aula: 611,
      },
    ],
  },
  {
    nombre: "Maria",
    edad: 54,
    añosEducando: 24,
    tel: 567689,
    Cursos: [
      {
        Nombre: "Geografia",
        Dia: "Martes y Jueves",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Carlos",
    edad: 56,
    añosEducando: 26,
    tel: 223456,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Lunes y Miercoles",
        Aula: 13,
      },
    ],
  },
  {
    nombre: "Andres",
    edad: 58,
    añosEducando: 28,
    tel: 235467,
    Cursos: [
      {
        Nombre: "Economia",
        Dia: "Martes y Jueves",
        Aula: 14,
      },
    ],
  },
  {
    nombre: "Carlos",
    edad: 60,
    añosEducando: 30,
    tel: 123456,
    Cursos: [
      {
        Nombre: "Fisica",
        Dia: "Lunes y Miercoles",
        Aula: 15,
      },
    ],
  },
  {
    nombre: "Juan",
    edad: 62,
    añosEducando: 32,
    tel: 234567,
    Cursos: [
      {
        Nombre: "Matematicas",
        Dia: "Martes y Jueves",
        Aula: 16,
      },
    ],
  },
  {
    nombre: "Carlos",
    edad: 64,
    añosEducando: 34,
    tel: 908877,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Lunes y Miercoles",
        Aula: 17,
      },
    ],
  },
  {
    nombre: "Maria",
    edad: 66,
    añosEducando: 36,
    tel: 345678,
    Cursos: [
      {
        Nombre: "Fisica",
        Dia: "Martes y Jueves",
        Aula: 18,
      },
    ],
  },
  {
    nombre: "Carlos",
    edad: 68,
    añosEducando: 38,
    tel: 345678,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Lunes y Miercoles",
        Aula: 19,
      },
    ],
  },
  {
    nombre: "Juan",
    edad: 70,
    añosEducando: 40,
    tel: 234345,
    Cursos: [
      {
        Nombre: "Educacion fisica",
        Dia: "Martes y Jueves",
        Aula: 20,
      },
    ],
  },
  // 166 DATOS
  {
    nombre: "Laura",
    edad: 29,
    añosEducando: 3,
    tel: 234345,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Lunes y Miercoles",
        Aula: 27,
      },
    ],
  },
  {
    nombre: "Miguel",
    edad: 31,
    añosEducando: 5,
    tel: 234345,
    Cursos: [
      {
        Nombre: "Español",
        Dia: "Martes y Jueves",
        Aula: 25,
      },
    ],
  },
  {
    nombre: "Carmen",
    edad: 33,
    añosEducando: 7,
    tel: 345678,
    Cursos: [
      {
        Nombre: "Ciencias naturales",
        Dia: "Lunes y Miercoles",
        Aula: 16,
      },
    ],
  },
  {
    nombre: "Pablo",
    edad: 35,
    añosEducando: 9,
    tel: 324345,
    Cursos: [
      {
        Nombre: "Fisica",
        Dia: "Martes y Jueves",
        Aula: 23,
      },
    ],
  },
  {
    nombre: "Isabel",
    edad: 37,
    añosEducando: 11,
    tel: 324365,
    Cursos: [
      {
        Nombre: "Economia",
        Dia: "Lunes y Miercoles",
        Aula: 11,
      },
    ],
  },
  {
    nombre: "David",
    edad: 39,
    añosEducando: 13,
    tel: 123456,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Martes y Jueves",
        Aula: 27,
      },
    ],
  },
  {
    nombre: "Ana",
    edad: 41,
    añosEducando: 15,
    tel: 345678,
    Cursos: [
      {
        Nombre: "Matematicas",
        Dia: "Lunes y Miercoles",
        Aula: 14,
      },
    ],
  },
  {
    nombre: "Javier",
    edad: 43,
    añosEducando: 17,
    tel: 345678,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Martes y Jueves",
        Aula: 13,
      },
    ],
  },
  {
    nombre: "Sara",
    edad: 45,
    añosEducando: 19,
    tel: 235456,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Lunes y Miercoles",
        Aula: 19,
      },
    ],
  },
  {
    nombre: "Jose",
    edad: 21,
    añosEducando: 2,
    tel: 235467,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Martes y Jueves",
        Aula: 10,
      },
    ],
  },
  {
    nombre: "Eva",
    edad: 49,
    añosEducando: 23,
    tel: 234567,
    Cursos: [
      {
        Nombre: "Geografia",
        Dia: "Lunes y Miercoles",
        Aula: 11,
      },
    ],
  },
  {
    nombre: "Pablo",
    edad: 51,
    añosEducando: 25,
    tel: 456789,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Martes y Jueves",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Raul",
    edad: 53,
    añosEducando: 27,
    tel: 234567,
    Cursos: [
      {
        Nombre: "Educacion fisica",
        Dia: "Lunes y Miercoles",
        Aula: 13,
      },
    ],
  },
  {
    nombre: "Cristina",
    edad: 55,
    añosEducando: 29,
    tel: 346578,
    Cursos: [
      {
        Nombre: "Etica",
        Dia: "Martes y Jueves",
        Aula: 14,
      },
    ],
  },
  {
    nombre: "Manuel",
    edad: 57,
    añosEducando: 31,
    tel: 456789,
    Cursos: [
      {
        Nombre: "Artistica",
        Dia: "Lunes y Miercoles",
        Aula: 15,
      },
    ],
  },
  {
    nombre: "Lucia",
    edad: 59,
    añosEducando: 33,
    tel: 234576,
    Cursos: [
      {
        Nombre: "Quimica",
        Dia: "Martes y Jueves",
        Aula: 16,
      },
    ],
  },
  {
    nombre: "Daniel",
    edad: 61,
    añosEducando: 35,
    tel: 235678,
    Cursos: [
      {
        Nombre: "Español",
        Dia: "Lunes y Miercoles",
        Aula: 17,
      },
    ],
  },
  {
    nombre: "Natalia",
    edad: 63,
    añosEducando: 37,
    tel: 907688,
    Cursos: [
      {
        Nombre: "Ciencias naturales",
        Dia: "Martes y Jueves",
        Aula: 18,
      },
    ],
  },
  {
    nombre: "Pedro",
    edad: 65,
    añosEducando: 39,
    tel: 346588,
    Cursos: [
      {
        Nombre: "Fisica",
        Dia: "Lunes y Miercoles",
        Aula: 19,
      },
    ],
  },
  {
    nombre: "Celia",
    edad: 67,
    añosEducando: 41,
    tel: 123456,
    Cursos: [
      {
        Nombre: "Economia",
        Dia: "Martes y Jueves",
        Aula: 20,
      },
    ],
  },
  {
    nombre: "Francisco",
    edad: 69,
    añosEducando: 43,
    tel: 345678,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Lunes y Miercoles",
        Aula: 21,
      },
    ],
  },
  {
    nombre: "Isabel",
    edad: 71,
    añosEducando: 45,
    tel: 345678,
    Cursos: [
      {
        Nombre: "Matematicas",
        Dia: "Martes y Jueves",
        Aula: 22,
      },
    ],
  },
  {
    nombre: "Jorge",
    edad: 73,
    añosEducando: 21,
    tel: 345678,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Lunes y Miercoles",
        Aula: 23,
      },
    ],
  },
  {
    nombre: "Maria",
    edad: 75,
    añosEducando: 49,
    tel: 345677,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Martes y Jueves",
        Aula: 24,
      },
    ],
  },
  {
    nombre: "Carlos",
    edad: 77,
    añosEducando: 31,
    tel: 768900,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Lunes y Miercoles",
        Aula: 25,
      },
    ],
  },
  {
    nombre: "Elena",
    edad: 56,
    añosEducando: 12,
    tel: 567890,
    Cursos: [
      {
        Nombre: "Geografia",
        Dia: "Martes y Jueves",
        Aula: 26,
      },
    ],
  },
  {
    nombre: "Luis",
    edad: 55,
    añosEducando: 22,
    tel: 134567,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Lunes y Miercoles",
        Aula: 27,
      },
    ],
  },
  {
    nombre: "Marta",
    edad: 66,
    añosEducando: 27,
    tel: 346799,
    Cursos: [
      {
        Nombre: "Educacion fisica",
        Dia: "Martes y Jueves",
        Aula: 28,
      },
    ],
  },
  // 134 DATOS
  {
    nombre: "Antonio",
    edad: 28,
    añosEducando: 2,
    tel: 145678,
    Cursos: [
      {
        Nombre: "Artistica",
        Dia: "Lunes y Miercoles",
        Aula: 24,
      },
    ],
  },
  {
    nombre: "Laura",
    edad: 30,
    añosEducando: 4,
    tel: 123456,
    Cursos: [
      {
        Nombre: "Quimica",
        Dia: "Martes y Jueves",
        Aula: 24,
      },
    ],
  },
  {
    nombre: "Juan",
    edad: 32,
    añosEducando: 6,
    tel: 345678,
    Cursos: [
      {
        Nombre: "Matematicas",
        Dia: "Lunes y Miercoles",
        Aula: 23,
      },
    ],
  },
  {
    nombre: "Maria",
    edad: 34,
    añosEducando: 8,
    tel: 235577,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Martes y Jueves",
        Aula: 23,
      },
    ],
  },
  {
    nombre: "Pedro",
    edad: 36,
    añosEducando: 10,
    tel: 124566,
    Cursos: [
      {
        Nombre: "Español",
        Dia: "Lunes y Miercoles",
        Aula: 23,
      },
    ],
  },
  {
    nombre: "Sofia",
    edad: 38,
    añosEducando: 12,
    tel: 235688,
    Cursos: [
      {
        Nombre: "Ciencias naturales",
        Dia: "Martes y Jueves",
        Aula: 23,
      },
    ],
  },
  {
    nombre: "Carlos",
    edad: 40,
    añosEducando: 14,
    tel: 235467,
    Cursos: [
      {
        Nombre: "Fisica",
        Dia: "Lunes y Miercoles",
        Aula: 23,
      },
    ],
  },
  {
    nombre: "Elena",
    edad: 42,
    añosEducando: 16,
    tel: 678900,
    Cursos: [
      {
        Nombre: "Economia",
        Dia: "Martes y Jueves",
        Aula: 23,
      },
    ],
  },
  {
    nombre: "Javier",
    edad: 44,
    añosEducando: 18,
    tel: 345678,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Lunes y Miercoles",
        Aula: 23,
      },
    ],
  },
  {
    nombre: "Maria",
    edad: 46,
    añosEducando: 20,
    tel: 123456,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Martes y Jueves",
        Aula: 10,
      },
    ],
  },
  {
    nombre: "Miguel",
    edad: 48,
    añosEducando: 22,
    tel: 345688,
    Cursos: [
      {
        Nombre: "Geografia",
        Dia: "Lunes y Miercoles",
        Aula: 11,
      },
    ],
  },
  {
    nombre: "Lucia",
    edad: 50,
    añosEducando: 24,
    tel: 124578,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Martes y Jueves",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Diego",
    edad: 52,
    añosEducando: 26,
    tel: 235677,
    Cursos: [
      {
        Nombre: "Educacion fisica",
        Dia: "Lunes y Miercoles",
        Aula: 13,
      },
    ],
  },
  {
    nombre: "Isabel",
    edad: 54,
    añosEducando: 28,
    tel: 124567,
    Cursos: [
      {
        Nombre: "Etica",
        Dia: "Martes y Jueves",
        Aula: 14,
      },
    ],
  },
  {
    nombre: "Pablo",
    edad: 56,
    añosEducando: 30,
    tel: 236780,
    Cursos: [
      {
        Nombre: "Matematicas",
        Dia: "Lunes y Miercoles",
        Aula: 15,
      },
    ],
  },
  {
    nombre: "Luisa",
    edad: 58,
    añosEducando: 32,
    tel: 908765,
    Cursos: [
      {
        Nombre: "Fisica",
        Dia: "Martes y Jueves",
        Aula: 16,
      },
    ],
  },
  {
    nombre: "Jorge",
    edad: 60,
    añosEducando: 34,
    tel: 236578,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Lunes y Miercoles",
        Aula: 17,
      },
    ],
  },
  {
    nombre: "Ana",
    edad: 62,
    añosEducando: 36,
    tel: 656488,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Martes y Jueves",
        Aula: 18,
      },
    ],
  },
  {
    nombre: "Jose",
    edad: 64,
    añosEducando: 38,
    tel: 456789,
    Cursos: [
      {
        Nombre: "Ciencias naturales",
        Dia: "Lunes y Miercoles",
        Aula: 19,
      },
    ],
  },
  {
    nombre: "Eva",
    edad: 66,
    añosEducando: 40,
    tel: 546799,
    Cursos: [
      {
        Nombre: "Artistica",
        Dia: "Martes y Jueves",
        Aula: 21,
      },
    ],
  },
  // 214 DATOS
  {
    nombre: "Santiago",
    edad: 30,
    añosEducando: 2,
    tel: 112344,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Lunes y Miercoles",
        Aula: 21,
      },
    ],
  },
  {
    nombre: "Elena",
    edad: 32,
    añosEducando: 4,
    tel: 345566,
    Cursos: [
      {
        Nombre: "Matematicas",
        Dia: "Martes y Jueves",
        Aula: 21,
      },
    ],
  },
  {
    nombre: "Miguel",
    edad: 34,
    añosEducando: 6,
    tel: 235577,
    Cursos: [
      {
        Nombre: "Fisica",
        Dia: "Lunes y Miercoles",
        Aula: 21,
      },
    ],
  },
  {
    nombre: "Laura",
    edad: 36,
    añosEducando: 8,
    tel: 346789,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Martes y Jueves",
        Aula: 21,
      },
    ],
  },
  {
    nombre: "Carlos",
    edad: 38,
    añosEducando: 10,
    tel: 124567,
    Cursos: [
      {
        Nombre: "Ciencias naturales",
        Dia: "Lunes y Miercoles",
        Aula: 21,
      },
    ],
  },
  {
    nombre: "Ana",
    edad: 40,
    añosEducando: 12,
    tel: 345677,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Martes y Jueves",
        Aula: 21,
      },
    ],
  },
  {
    nombre: "Juan",
    edad: 42,
    añosEducando: 14,
    tel: 234567,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Lunes y Miercoles",
        Aula: 20,
      },
    ],
  },
  {
    nombre: "Maria",
    edad: 44,
    añosEducando: 16,
    tel: 778899,
    Cursos: [
      {
        Nombre: "Economia",
        Dia: "Martes y Jueves",
        Aula: 20,
      },
    ],
  },
  {
    nombre: "Pedro",
    edad: 46,
    añosEducando: 18,
    tel: 235577,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Lunes y Miercoles",
        Aula: 20,
      },
    ],
  },
  {
    nombre: "Luisa",
    edad: 48,
    añosEducando: 20,
    tel: 123456,
    Cursos: [
      {
        Nombre: "Artistica",
        Dia: "Martes y Jueves",
        Aula: 20,
      },
    ],
  },
  {
    nombre: "Jorge",
    edad: 50,
    añosEducando: 22,
    tel: 346754,
    Cursos: [
      {
        Nombre: "Español",
        Dia: "Lunes y Miercoles",
        Aula: 20,
      },
    ],
  },
  {
    nombre: "Isabel",
    edad: 52,
    añosEducando: 24,
    tel: 435678,
    Cursos: [
      {
        Nombre: "Quimica",
        Dia: "Martes y Jueves",
        Aula: 20,
      },
    ],
  },
  {
    nombre: "Diego",
    edad: 54,
    añosEducando: 26,
    tel: 235678,
    Cursos: [
      {
        Nombre: "Etica",
        Dia: "Lunes y Miercoles",
        Aula: 20,
      },
    ],
  },
  {
    nombre: "Eva",
    edad: 56,
    añosEducando: 28,
    tel: 345678,
    Cursos: [
      {
        Nombre: "Geografia",
        Dia: "Martes y Jueves",
        Aula: 20,
      },
    ],
  },
  {
    nombre: "Pablo",
    edad: 58,
    añosEducando: 30,
    tel: 905467,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Lunes y Miercoles",
        Aula: 20,
      },
    ],
  },
  {
    nombre: "Sofia",
    edad: 60,
    añosEducando: 32,
    tel: 237790,
    Cursos: [
      {
        Nombre: "Educacion fisica",
        Dia: "Martes y Jueves",
        Aula: 20,
      },
    ],
  },
  {
    nombre: "Javier",
    edad: 62,
    añosEducando: 34,
    tel: 235677,
    Cursos: [
      {
        Nombre: "Matematicas",
        Dia: "Lunes y Miercoles",
        Aula: 20,
      },
    ],
  },
  {
    nombre: "Maria",
    edad: 64,
    añosEducando: 36,
    tel: 235687,
    Cursos: [
      {
        Nombre: "Fisica",
        Dia: "Martes y Jueves",
        Aula: 19,
      },
    ],
  },
  {
    nombre: "Luis",
    edad: 66,
    añosEducando: 38,
    tel: 235477,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Lunes y Miercoles",
        Aula: 19,
      },
    ],
  },
  {
    nombre: "Elena",
    edad: 68,
    añosEducando: 40,
    tel: 234577,
    Cursos: [
      {
        Nombre: "Ciencias naturales",
        Dia: "Martes y Jueves",
        Aula: 19,
      },
    ],
  },
  // 234 DATOS
  {
    nombre: "Sandra",
    edad: 30,
    añosEducando: 2,
    tel: 346789,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Lunes y Miercoles",
        Aula: 19,
      },
    ],
  },
  {
    nombre: "Mario",
    edad: 32,
    añosEducando: 4,
    tel: 678900,
    Cursos: [
      {
        Nombre: "Matematicas",
        Dia: "Martes y Jueves",
        Aula: 19,
      },
    ],
  },
  {
    nombre: "Laura",
    edad: 34,
    añosEducando: 6,
    tel: 345678,
    Cursos: [
      {
        Nombre: "Fisica",
        Dia: "Lunes y Miercoles",
        Aula: 19,
      },
    ],
  },
  {
    nombre: "Carlos",
    edad: 36,
    añosEducando: 8,
    tel: 235688,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Martes y Jueves",
        Aula: 19,
      },
    ],
  },
  {
    nombre: "Elena",
    edad: 38,
    añosEducando: 10,
    tel: 668899,
    Cursos: [
      {
        Nombre: "Ciencias naturales",
        Dia: "Lunes y Miercoles",
        Aula: 19,
      },
    ],
  },
  {
    nombre: "Miguel",
    edad: 40,
    añosEducando: 12,
    tel: 234567,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Martes y Jueves",
        Aula: 19,
      },
    ],
  },
  {
    nombre: "Maria",
    edad: 42,
    añosEducando: 14,
    tel: 546789,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Lunes y Miercoles",
        Aula: 19,
      },
    ],
  },
  {
    nombre: "Juan",
    edad: 44,
    añosEducando: 16,
    tel: 345677,
    Cursos: [
      {
        Nombre: "Economia",
        Dia: "Martes y Jueves",
        Aula: 19,
      },
    ],
  },
  {
    nombre: "Pedro",
    edad: 46,
    añosEducando: 18,
    tel: 235678,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Lunes y Miercoles",
        Aula: 18,
      },
    ],
  },
  {
    nombre: "Luisa",
    edad: 48,
    añosEducando: 20,
    tel: 236578,
    Cursos: [
      {
        Nombre: "Artistica",
        Dia: "Martes y Jueves",
        Aula: 18,
      },
    ],
  },
  {
    nombre: "Jorge",
    edad: 50,
    añosEducando: 22,
    tel: 235688,
    Cursos: [
      {
        Nombre: "Español",
        Dia: "Lunes y Miercoles",
        Aula: 18,
      },
    ],
  },
  {
    nombre: "Isabel",
    edad: 52,
    añosEducando: 24,
    tel: 235677,
    Cursos: [
      {
        Nombre: "Quimica",
        Dia: "Martes y Jueves",
        Aula: 18,
      },
    ],
  },
  {
    nombre: "Diego",
    edad: 54,
    añosEducando: 26,
    tel: 346578,
    Cursos: [
      {
        Nombre: "Etica",
        Dia: "Lunes y Miercoles",
        Aula: 18,
      },
    ],
  },
  {
    nombre: "Eva",
    edad: 56,
    añosEducando: 28,
    tel: 344577,
    Cursos: [
      {
        Nombre: "Geografia",
        Dia: "Martes y Jueves",
        Aula: 18,
      },
    ],
  },
  {
    nombre: "Pablo",
    edad: 58,
    añosEducando: 30,
    tel: 347689,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Lunes y Miercoles",
        Aula: 18,
      },
    ],
  },
  {
    nombre: "Sofia",
    edad: 60,
    añosEducando: 32,
    tel: 345688,
    Cursos: [
      {
        Nombre: "Educacion fisica",
        Dia: "Martes y Jueves",
        Aula: 18,
      },
    ],
  },
  {
    nombre: "Javier",
    edad: 62,
    añosEducando: 34,
    tel: 235577,
    Cursos: [
      {
        Nombre: "Matematicas",
        Dia: "Lunes y Miercoles",
        Aula: 18,
      },
    ],
  },
  {
    nombre: "Maria",
    edad: 64,
    añosEducando: 36,
    tel: 345688,
    Cursos: [
      {
        Nombre: "Fisica",
        Dia: "Martes y Jueves",
        Aula: 18,
      },
    ],
  },
  {
    nombre: "Luis",
    edad: 66,
    añosEducando: 38,
    tel: 986555,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Lunes y Miercoles",
        Aula: 18,
      },
    ],
  },
  {
    nombre: "Elena",
    edad: 68,
    añosEducando: 40,
    tel: 235678,
    Cursos: [
      {
        Nombre: "Ciencias naturales",
        Dia: "Martes y Jueves",
        Aula: 18,
      },
    ],
  },
  // 254 DATOS
  {
    nombre: "Carlos",
    edad: 70,
    añosEducando: 42,
    tel: 345678,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Lunes y Miercoles",
        Aula: 18,
      },
    ],
  },
  {
    nombre: "Laura",
    edad: 72,
    añosEducando: 44,
    tel: 345678,
    Cursos: [
      {
        Nombre: "Matematicas",
        Dia: "Martes y Jueves",
        Aula: 18,
      },
    ],
  },
  {
    nombre: "Pedro",
    edad: 74,
    añosEducando: 46,
    tel: 346788,
    Cursos: [
      {
        Nombre: "Fisica",
        Dia: "Lunes y Miercoles",
        Aula: 18,
      },
    ],
  },
  {
    nombre: "Maria",
    edad: 76,
    añosEducando: 48,
    tel: 235678,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Martes y Jueves",
        Aula: 18,
      },
    ],
  },
  {
    nombre: "Juan",
    edad: 57,
    añosEducando: 30,
    tel: 235678,
    Cursos: [
      {
        Nombre: "Ciencias naturales",
        Dia: "Lunes y Miercoles",
        Aula: 18,
      },
    ],
  },
  {
    nombre: "Elena",
    edad: 40,
    añosEducando: 15,
    tel: 345678,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Martes y Jueves",
        Aula: 17,
      },
    ],
  },
  {
    nombre: "Miguel",
    edad: 23,
    añosEducando: 5,
    tel: 345678,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Lunes y Miercoles",
        Aula: 17,
      },
    ],
  },
  {
    nombre: "Sandra",
    edad: 60,
    añosEducando: 32,
    tel: 456588,
    Cursos: [
      {
        Nombre: "Economia",
        Dia: "Martes y Jueves",
        Aula: 17,
      },
    ],
  },
  {
    nombre: "Carlos",
    edad: 26,
    añosEducando: 11,
    tel: 456789,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Lunes y Miercoles",
        Aula: 17,
      },
    ],
  },
  {
    nombre: "Laura",
    edad: 55,
    añosEducando: 20,
    tel: 444433332222,
    Cursos: [
      {
        Nombre: "Artistica",
        Dia: "Martes y Jueves",
        Aula: 17,
      },
    ],
  },
  {
    nombre: "Pedro",
    edad: 23,
    añosEducando: 7,
    tel: 235678,
    Cursos: [
      {
        Nombre: "Español",
        Dia: "Lunes y Miercoles",
        Aula: 17,
      },
    ],
  },
  {
    nombre: "Maria",
    edad: 27,
    añosEducando: 13,
    tel: 346577,
    Cursos: [
      {
        Nombre: "Quimica",
        Dia: "Martes y Jueves",
        Aula: 17,
      },
    ],
  },
  {
    nombre: "Juan",
    edad: 34,
    añosEducando: 66,
    tel: 235688,
    Cursos: [
      {
        Nombre: "Etica",
        Dia: "Lunes y Miercoles",
        Aula: 17,
      },
    ],
  },
  {
    nombre: "Elena",
    edad: 44,
    añosEducando: 12,
    tel: 345678,
    Cursos: [
      {
        Nombre: "Geografia",
        Dia: "Martes y Jueves",
        Aula: 17,
      },
    ],
  },
  {
    nombre: "Miguel",
    edad: 32,
    añosEducando: 10,
    tel: 436587,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Lunes y Miercoles",
        Aula: 17,
      },
    ],
  },
  {
    nombre: "Sandra",
    edad: 34,
    añosEducando: 12,
    tel: 235678,
    Cursos: [
      {
        Nombre: "Matematicas",
        Dia: "Martes y Jueves",
        Aula: 17,
      },
    ],
  },
  {
    nombre: "Mario",
    edad: 102,
    añosEducando: 74,
    tel: 235688,
    Cursos: [
      {
        Nombre: "Fisica",
        Dia: "Lunes y Miercoles",
        Aula: 17,
      },
    ],
  },
  {
    nombre: "Laura",
    edad: 104,
    añosEducando: 76,
    tel: 345678,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Martes y Jueves",
        Aula: 17,
      },
    ],
  },
  {
    nombre: "Pedro",
    edad: 106,
    añosEducando: 78,
    tel: 324577,
    Cursos: [
      {
        Nombre: "Ciencias naturales",
        Dia: "Lunes y Miercoles",
        Aula: 17,
      },
    ],
  },
  {
    nombre: "Maria",
    edad: 108,
    añosEducando: 80,
    tel: 456789,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Martes y Jueves",
        Aula: 17,
      },
    ],
  },
  // 274 DATOS
  {
    nombre: "Maria",
    edad: 72,
    añosEducando: 50,
    tel: 346789,
    Cursos: [
      {
        Nombre: "Matematicas",
        Dia: "Lunes y Miercoles",
        Aula: 16,
      },
    ],
  },
  {
    nombre: "Juan",
    edad: 74,
    añosEducando: 52,
    tel: 235678,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Martes y Jueves",
        Aula: 16,
      },
    ],
  },
  {
    nombre: "Carlos",
    edad: 70,
    añosEducando: 48,
    tel: 113355,
    Cursos: [
      {
        Nombre: "Fisica",
        Dia: "Lunes y Miercoles",
        Aula: 16,
      },
    ],
  },
  {
    nombre: "Laura",
    edad: 68,
    añosEducando: 46,
    tel: 235678,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Martes y Jueves",
        Aula: 16,
      },
    ],
  },
  {
    nombre: "Pedro",
    edad: 65,
    añosEducando: 43,
    tel: 235677,
    Cursos: [
      {
        Nombre: "Economia",
        Dia: "Lunes y Miercoles",
        Aula: 16,
      },
    ],
  },
  {
    nombre: "Elena",
    edad: 71,
    añosEducando: 49,
    tel: 235678,
    Cursos: [
      {
        Nombre: "Ciencias naturales",
        Dia: "Martes y Jueves",
        Aula: 16,
      },
    ],
  },
  {
    nombre: "Miguel",
    edad: 67,
    añosEducando: 45,
    tel: 235577,
    Cursos: [
      {
        Nombre: "Español",
        Dia: "Lunes y Miercoles",
        Aula: 16,
      },
    ],
  },
  {
    nombre: "Sandra",
    edad: 69,
    añosEducando: 21,
    tel: 348800,
    Cursos: [
      {
        Nombre: "Artistica",
        Dia: "Martes y Jueves",
        Aula: 16,
      },
    ],
  },
  {
    nombre: "Carlos",
    edad: 73,
    añosEducando: 51,
    tel: 234566,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Lunes y Miercoles",
        Aula: 16,
      },
    ],
  },
  {
    nombre: "Laura",
    edad: 64,
    añosEducando: 42,
    tel: 546799,
    Cursos: [
      {
        Nombre: "Quimica",
        Dia: "Martes y Jueves",
        Aula: 16,
      },
    ],
  },
  {
    nombre: "Miguel",
    edad: 66,
    añosEducando: 44,
    tel: 678900,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Lunes y Miercoles",
        Aula: 16,
      },
    ],
  },
  {
    nombre: "Sandra",
    edad: 75,
    añosEducando: 53,
    tel: 234567,
    Cursos: [
      {
        Nombre: "Etica",
        Dia: "Martes y Jueves",
        Aula: 16,
      },
    ],
  },
  {
    nombre: "Carlos",
    edad: 63,
    añosEducando: 41,
    tel: 123456,
    Cursos: [
      {
        Nombre: "Geografia",
        Dia: "Lunes y Miercoles",
        Aula: 16,
      },
    ],
  },
  {
    nombre: "Laura",
    edad: 74,
    añosEducando: 52,
    tel: 436788,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Martes y Jueves",
        Aula: 16,
      },
    ],
  },
  {
    nombre: "Miguel",
    edad: 72,
    añosEducando: 50,
    tel: 325667,
    Cursos: [
      {
        Nombre: "Matematicas",
        Dia: "Lunes y Miercoles",
        Aula: 16,
      },
    ],
  },
  {
    nombre: "Elena",
    edad: 70,
    añosEducando: 48,
    tel: 547899,
    Cursos: [
      {
        Nombre: "Fisica",
        Dia: "Martes y Jueves",
        Aula: 16,
      },
    ],
  },
  {
    nombre: "Juan",
    edad: 67,
    añosEducando: 45,
    tel: 435678,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Lunes y Miercoles",
        Aula: 16,
      },
    ],
  },
  {
    nombre: "Carlos",
    edad: 69,
    añosEducando: 21,
    tel: 333355,
    Cursos: [
      {
        Nombre: "Educacion fisica",
        Dia: "Martes y Jueves",
        Aula: 16,
      },
    ],
  },
  {
    nombre: "Sandra",
    edad: 68,
    añosEducando: 46,
    tel: 345688,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Lunes y Miercoles",
        Aula: 16,
      },
    ],
  },
  {
    nombre: "Laura",
    edad: 66,
    añosEducando: 44,
    tel: 435788,
    Cursos: [
      {
        Nombre: "Fisica",
        Dia: "Martes y Jueves",
        Aula: 16,
      },
    ],
  },
  // 234 DATOS
  {
    nombre: "Juan",
    edad: 73,
    añosEducando: 51,
    tel: 546744,
    Cursos: [
      {
        Nombre: "Ciencias naturales",
        Dia: "Martes y Jueves",
        Aula: 16,
      },
    ],
  },
  {
    nombre: "Maria",
    edad: 70,
    añosEducando: 48,
    tel: 324577,
    Cursos: [
      {
        Nombre: "Español",
        Aula: 15,
      },
    ],
  },
  {
    nombre: "Carlos",
    edad: 68,
    añosEducando: 46,
    tel: 465423,
    Cursos: [
      {
        Nombre: "Artistica",
        Dia: "Martes y Jueves",
        Aula: 15,
      },
    ],
  },
  {
    nombre: "Laura",
    edad: 72,
    añosEducando: 50,
    tel: 455643,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Lunes y Miercoles",
        Aula: 15,
      },
    ],
  },
  {
    nombre: "Pedro",
    edad: 71,
    añosEducando: 49,
    tel: 235566,
    Cursos: [
      {
        Nombre: "Quimica",
        Dia: "Martes y Jueves",
        Aula: 15,
      },
    ],
  },
  {
    nombre: "Elena",
    edad: 69,
    añosEducando: 21,
    tel: 345678,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Lunes y Miercoles",
        Aula: 15,
      },
    ],
  },
  {
    nombre: "Miguel",
    edad: 74,
    añosEducando: 52,
    tel: 346555,
    Cursos: [
      {
        Nombre: "Etica",
        Dia: "Martes y Jueves",
        Aula: 15,
      },
    ],
  },
  {
    nombre: "Sandra",
    edad: 67,
    añosEducando: 45,
    tel: 436588,
    Cursos: [
      {
        Nombre: "Geografia",
        Dia: "Lunes y Miercoles",
        Aula: 15,
      },
    ],
  },
  {
    nombre: "Carlos",
    edad: 75,
    añosEducando: 53,
    tel: 434676,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Martes y Jueves",
        Aula: 15,
      },
    ],
  },
  {
    nombre: "Laura",
    edad: 73,
    añosEducando: 51,
    tel: 324567,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Lunes y Miercoles",
        Aula: 15,
      },
    ],
  },
  {
    nombre: "Miguel",
    edad: 70,
    añosEducando: 48,
    tel: 345668,
    Cursos: [
      {
        Nombre: "Matematicas",
        Dia: "Martes y Jueves",
        Aula: 15,
      },
    ],
  },
  {
    nombre: "Elena",
    edad: 72,
    añosEducando: 50,
    tel: 577688,
    Cursos: [
      {
        Nombre: "fisica",
        Dia: "Lunes y Miercoles",
        Aula: 15,
      },
    ],
  },
  {
    nombre: "Juan",
    edad: 69,
    añosEducando: 21,
    tel: 124567,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Martes y Jueves",
        Aula: 15,
      },
    ],
  },
  {
    nombre: "Carlos",
    edad: 74,
    añosEducando: 52,
    tel: 567788,
    Cursos: [
      {
        Nombre: "Educacion fisica",
        Dia: "Lunes y Miercoles",
        Aula: 15,
      },
    ],
  },
  {
    nombre: "Laura",
    edad: 71,
    añosEducando: 49,
    tel: 667788,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Martes y Jueves",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Miguel",
    edad: 68,
    añosEducando: 46,
    tel: 234567,
    Cursos: [
      {
        Nombre: "Economia",
        Dia: "Lunes y Miercoles",
        Aula: 23,
      },
    ],
  },
  {
    nombre: "Sandra",
    edad: 75,
    añosEducando: 53,
    tel: 768900,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Martes y Jueves",
        Aula: 15,
      },
    ],
  },
  {
    nombre: "Carlos",
    edad: 66,
    añosEducando: 44,
    tel: 134567,
    Cursos: [
      {
        Nombre: "Ciencias naturales",
        Dia: "Lunes y Miercoles",
        Aula: 15,
      },
    ],
  },
  {
    nombre: "Laura",
    edad: 75,
    añosEducando: 53,
    tel: 546789,
    Cursos: [
      {
        Nombre: "Español",
        Dia: "Martes y Jueves",
        Aula: 15,
      },
    ],
  },
  {
    nombre: "Miguel",
    edad: 73,
    añosEducando: 51,
    tel: 123456,
    Cursos: [
      {
        Nombre: "Artistica",
        Dia: "Lunes y Miercoles",
        Aula: 15,
      },
    ],
  },
  // 314 DATOS
  {
    nombre: "Elena",
    edad: 70,
    añosEducando: 48,
    tel: 446688,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Martes y Jueves",
        Aula: 14,
      },
    ],
  },
  {
    nombre: "Pedro",
    edad: 67,
    añosEducando: 45,
    tel: 435677,
    Cursos: [
      {
        Nombre: "Quimica",
        Dia: "Lunes y Miercoles",
        Aula: 14,
      },
    ],
  },
  {
    nombre: "Sandra",
    edad: 72,
    añosEducando: 50,
    tel: 245678,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Martes y Jueves",
        Aula: 14,
      },
    ],
  },
  {
    nombre: "Carlos",
    edad: 69,
    añosEducando: 21,
    tel: 547899,
    Cursos: [
      {
        Nombre: "Etica",
        Dia: "Lunes y Miercoles",
        Aula: 14,
      },
    ],
  },
  {
    nombre: "Miguel",
    edad: 71,
    añosEducando: 49,
    tel: 325678,
    Cursos: [
      {
        Nombre: "Geografia",
        Dia: "Martes y Jueves",
        Aula: 14,
      },
    ],
  },
  {
    nombre: "Laura",
    edad: 73,
    añosEducando: 51,
    tel: 215677,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Lunes y Miercoles",
        Aula: 14,
      },
    ],
  },
  {
    nombre: "Miguel",
    edad: 69,
    añosEducando: 21,
    tel: 325687,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Martes y Jueves",
        Aula: 14,
      },
    ],
  },
  {
    nombre: "Sandra",
    edad: 68,
    añosEducando: 46,
    tel: 213465,
    Cursos: [
      {
        Nombre: "Matematicas",
        Dia: "Lunes y Miercoles",
        Aula: 14,
      },
    ],
  },
  {
    nombre: "Pedro",
    edad: 70,
    añosEducando: 48,
    tel: 325678,
    Cursos: [
      {
        Nombre: "fisica",
        Dia: "Martes y Jueves",
        Aula: 14,
      },
    ],
  },
  {
    nombre: "Elena",
    edad: 72,
    añosEducando: 50,
    tel: 325467,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Lunes y Miercoles",
        Aula: 14,
      },
    ],
  },
  {
    nombre: "Carlos",
    edad: 71,
    añosEducando: 49,
    tel: 213467,
    Cursos: [
      {
        Nombre: "Educacion fisica",
        Dia: "Martes y Jueves",
        Aula: 14,
      },
    ],
  },
  {
    nombre: "Pedro",
    edad: 72,
    añosEducando: 50,
    tel: 435678,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Lunes y Miercoles",
        Aula: 14,
      },
    ],
  },
  {
    nombre: "Elena",
    edad: 69,
    añosEducando: 21,
    tel: 213467,
    Cursos: [
      {
        Nombre: "Economia",
        Dia: "Martes y Jueves",
        Aula: 13,
      },
    ],
  },
  {
    nombre: "Miguel",
    edad: 70,
    añosEducando: 48,
    tel: 213456,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Lunes y Miercoles",
        Aula: 13,
      },
    ],
  },
  {
    nombre: "Laura",
    edad: 68,
    añosEducando: 46,
    tel: 214567,
    Cursos: [
      {
        Nombre: "Biologia",
        Dia: "Martes y Jueves",
        Aula: 13,
      },
    ],
  },
  {
    nombre: "Sandra",
    edad: 71,
    añosEducando: 49,
    tel: 657890,
    Cursos: [
      {
        Nombre: "Español",
        Dia: "Lunes y Miercoles",
        Aula: 13,
      },
    ],
  },
  {
    nombre: "Carlos",
    edad: 70,
    añosEducando: 48,
    tel: 214567,
    Cursos: [
      {
        Nombre: "Artistica",
        Dia: "Martes y Jueves",
        Aula: 13,
      },
    ],
  },
  {
    nombre: "Pedro",
    edad: 71,
    añosEducando: 49,
    tel: 324567,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Lunes y Miercoles",
        Aula: 13,
      },
    ],
  },
  {
    nombre: "Elena",
    edad: 73,
    añosEducando: 51,
    tel: 435678,
    Cursos: [
      {
        Nombre: "Quimica",
        Dia: "Martes y Jueves",
        Aula: 13,
      },
    ],
  },
  {
    nombre: "Miguel",
    edad: 71,
    añosEducando: 49,
    tel: 324233,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Lunes y Miercoles",
        Aula: 13,
      },
    ],
  },
  // 334 DATOS
  {
    nombre: "Sofia",
    edad: 72,
    añosEducando: 52,
    tel: 768900,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Martes y Jueves",
        Aula: 13,
      },
    ],
  },
  {
    nombre: "Diego",
    edad: 73,
    añosEducando: 53,
    tel: 234565,
    Cursos: [
      {
        Nombre: "Matematicas",
        Dia: "Lunes y Miercoles",
        Aula: 13,
      },
    ],
  },
  {
    nombre: "Valeria",
    edad: 74,
    añosEducando: 54,
    tel: 436588,
    Cursos: [
      {
        Nombre: "Biologia",
        Dia: "Martes y Jueves",
        Aula: 13,
      },
    ],
  },
  {
    nombre: "Alejandro",
    edad: 75,
    añosEducando: 55,
    tel: 346789,
    Cursos: [
      {
        Nombre: "fisica",
        Dia: "Lunes y Miercoles",
        Aula: 13,
      },
    ],
  },
  {
    nombre: "Lucia",
    edad: 72,
    añosEducando: 52,
    tel: 234567,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Martes y Jueves",
        Aula: 13,
      },
    ],
  },
  {
    nombre: "Martin",
    edad: 73,
    añosEducando: 53,
    tel: 234577,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Lunes y Miercoles",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Sofia",
    edad: 74,
    añosEducando: 54,
    tel: 785677,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Martes y Jueves",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Diego",
    edad: 75,
    añosEducando: 55,
    tel: 325678,
    Cursos: [
      {
        Nombre: "Geografia",
        Dia: "Lunes y Miercoles",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Valeria",
    edad: 72,
    añosEducando: 52,
    tel: 235678,
    Cursos: [
      {
        Nombre: "Educacion fisica",
        Dia: "Martes y Jueves",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Alejandro",
    edad: 73,
    añosEducando: 53,
    tel: 546899,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Lunes y Miercoles",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Lucia",
    edad: 74,
    añosEducando: 54,
    tel: 435679,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Martes y Jueves",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Martin",
    edad: 75,
    añosEducando: 55,
    tel: 324567,
    Cursos: [
      {
        Nombre: "Artistica",
        Dia: "Lunes y Miercoles",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Sofia",
    edad: 72,
    añosEducando: 52,
    tel: 367889,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Martes y Jueves",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Diego",
    edad: 73,
    añosEducando: 53,
    tel: 123456,
    Cursos: [
      {
        Nombre: "Quimica",
        Dia: "Lunes y Miercoles",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Valeria",
    edad: 74,
    añosEducando: 54,
    tel: 789077,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Martes y Jueves",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Alejandro",
    edad: 75,
    añosEducando: 55,
    tel: 2124567,
    Cursos: [
      {
        Nombre: "Etica",
        Dia: "Lunes y Miercoles",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Lucia",
    edad: 72,
    añosEducando: 52,
    tel: 214567,
    Cursos: [
      {
        Nombre: "Economia",
        Dia: "Martes y Jueves",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Martin",
    edad: 73,
    añosEducando: 53,
    tel: 214567,
    Cursos: [
      {
        Nombre: "Español",
        Dia: "Lunes y Miercoles",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Sofia",
    edad: 74,
    añosEducando: 54,
    tel: 908966,
    Cursos: [
      {
        Nombre: "Artistica",
        Dia: "Martes y Jueves",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Diego",
    edad: 75,
    añosEducando: 55,
    tel: 216688,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Lunes y Miercoles",
        Aula: 12,
      },
    ],
  },
  // 354 DATOS
  {
    nombre: "Elena",
    edad: 72,
    añosEducando: 52,
    tel: 215566,
    Cursos: [
      {
        Nombre: "Biologia",
        Dia: "Martes y Jueves",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Adrian",
    edad: 73,
    añosEducando: 53,
    tel: 216688,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Lunes y Miercoles",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Santiago",
    edad: 74,
    añosEducando: 54,
    tel: 213456,
    Cursos: [
      {
        Nombre: "Geografia",
        Dia: "Martes y Jueves",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Valentina",
    edad: 75,
    añosEducando: 55,
    tel: 789000,
    Cursos: [
      {
        Nombre: "Educacion fisica",
        Dia: "Lunes y Miercoles",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Mateo",
    edad: 72,
    añosEducando: 52,
    tel: 213456,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Martes y Jueves",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Camila",
    edad: 73,
    añosEducando: 53,
    tel: 214576,
    Cursos: [
      {
        Nombre: "fisica",
        Dia: "Lunes y Miercoles",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Joaquin",
    edad: 74,
    añosEducando: 54,
    tel: 367890,
    Cursos: [
      {
        Nombre: "Matematicas",
        Dia: "Martes y Jueves",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Isabella",
    edad: 75,
    añosEducando: 55,
    tel: 213456,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Lunes y Miercoles",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Samuel",
    edad: 72,
    añosEducando: 52,
    tel: 125678,
    Cursos: [
      {
        Nombre: "Artistica",
        Dia: "Martes y Jueves",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Victoria",
    edad: 73,
    añosEducando: 53,
    tel: 987665,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Lunes y Miercoles",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Emilio",
    edad: 74,
    añosEducando: 54,
    tel: 667700,
    Cursos: [
      {
        Nombre: "Quimica",
        Dia: "Martes y Jueves",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Renata",
    edad: 75,
    añosEducando: 55,
    tel: 214567,
    Cursos: [
      {
        Nombre: "Etica",
        Dia: "Lunes y Miercoles",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Benjamin",
    edad: 72,
    añosEducando: 52,
    tel: 908900,
    Cursos: [
      {
        Nombre: "Español",
        Dia: "Martes y Jueves",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Mia",
    edad: 73,
    añosEducando: 53,
    tel: 236789,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Lunes y Miercoles",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Lucas",
    edad: 74,
    añosEducando: 54,
    tel: 214567,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Martes y Jueves",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Emma",
    edad: 75,
    añosEducando: 55,
    tel: 234578,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Lunes y Miercoles",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Mateo",
    edad: 72,
    añosEducando: 52,
    tel: 880990,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Martes y Jueves",
        Aula: 11,
      },
    ],
  },
  {
    nombre: "Sofia",
    edad: 73,
    añosEducando: 53,
    tel: 234567,
    Cursos: [
      {
        Nombre: "Geografia",
        Dia: "Lunes y Miercoles",
        Aula: 11,
      },
    ],
  },
  {
    nombre: "Valentina",
    edad: 74,
    añosEducando: 54,
    tel: 234567,
    Cursos: [
      {
        Nombre: "Educacion fisica",
        Dia: "Martes y Jueves",
        Aula: 11,
      },
    ],
  },
  {
    nombre: "Joaquin",
    edad: 75,
    añosEducando: 55,
    tel: 213456,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Lunes y Miercoles",
        Aula: 11,
      },
    ],
  },
  // 374 DATOS
  {
    nombre: "Elena",
    edad: 65,
    añosEducando: 45,
    tel: 776688,
    Cursos: [
      {
        Nombre: "Biologia",
        Dia: "Martes y Jueves",
        Aula: 11,
      },
    ],
  },
  {
    nombre: "Adrian",
    edad: 66,
    añosEducando: 46,
    tel: 214577,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Lunes y Miercoles",
        Aula: 11,
      },
    ],
  },
  {
    nombre: "Santiago",
    edad: 67,
    añosEducando: 21,
    tel: 214567,
    Cursos: [
      {
        Nombre: "Geografia",
        Dia: "Martes y Jueves",
        Aula: 1243,
      },
    ],
  },
  {
    nombre: "Valentina",
    edad: 68,
    añosEducando: 48,
    tel: 678900,
    Cursos: [
      {
        Nombre: "Educacion fisica",
        Dia: "Lunes y Miercoles",
        Aula: 11,
      },
    ],
  },
  {
    nombre: "Mateo",
    edad: 65,
    añosEducando: 45,
    tel: 213456,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Martes y Jueves",
        Aula: 11,
      },
    ],
  },
  {
    nombre: "Camila",
    edad: 66,
    añosEducando: 46,
    tel: 213456,
    Cursos: [
      {
        Nombre: "fisica",
        Dia: "Lunes y Miercoles",
        Aula: 11,
      },
    ],
  },
  {
    nombre: "Joaquin",
    edad: 67,
    añosEducando: 21,
    tel: 890090,
    Cursos: [
      {
        Nombre: "Matematicas",
        Dia: "Martes y Jueves",
        Aula: 11,
      },
    ],
  },
  {
    nombre: "Isabella",
    edad: 68,
    añosEducando: 48,
    tel: 324576,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Lunes y Miercoles",
        Aula: 11,
      },
    ],
  },
  {
    nombre: "Samuel",
    edad: 65,
    añosEducando: 45,
    tel: 235567,
    Cursos: [
      {
        Nombre: "Artistica",
        Dia: "Martes y Jueves",
        Aula: 11,
      },
    ],
  },
  {
    nombre: "Victoria",
    edad: 66,
    añosEducando: 46,
    tel: 5467889,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Lunes y Miercoles",
        Aula: 11,
      },
    ],
  },
  {
    nombre: "Emilio",
    edad: 67,
    añosEducando: 21,
    tel: 778900,
    Cursos: [
      {
        Nombre: "Quimica",
        Dia: "Martes y Jueves",
        Aula: 11,
      },
    ],
  },
  {
    nombre: "Renata",
    edad: 68,
    añosEducando: 48,
    tel: 225789,
    Cursos: [
      {
        Nombre: "Etica",
        Dia: "Lunes y Miercoles",
        Aula: 11,
      },
    ],
  },
  {
    nombre: "Benjamin",
    edad: 65,
    añosEducando: 45,
    tel: 145678,
    Cursos: [
      {
        Nombre: "Español",
        Dia: "Martes y Jueves",
        Aula: 11,
      },
    ],
  },
  {
    nombre: "Mia",
    edad: 66,
    añosEducando: 46,
    tel: 567890,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Lunes y Miercoles",
        Aula: 11,
      },
    ],
  },
  {
    nombre: "Lucas",
    edad: 67,
    añosEducando: 21,
    tel: 768090,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Martes y Jueves",
        Aula: 11,
      },
    ],
  },
  {
    nombre: "Emma",
    edad: 68,
    añosEducando: 48,
    tel: 235678,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Lunes y Miercoles",
        Aula: 11,
      },
    ],
  },
  {
    nombre: "Mateo",
    edad: 65,
    añosEducando: 45,
    tel: 123456,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Martes y Jueves",
        Aula: 11,
      },
    ],
  },
  {
    nombre: "Sofia",
    edad: 66,
    añosEducando: 46,
    tel: 234567,
    Cursos: [
      {
        Nombre: "Geografia",
        Dia: "Lunes y Miercoles",
        Aula: 10,
      },
    ],
  },
  {
    nombre: "Valentina",
    edad: 67,
    añosEducando: 21,
    tel: 234567,
    Cursos: [
      {
        Nombre: "Educacion fisica",
        Dia: "Martes y Jueves",
        Aula: 10,
      },
    ],
  },
  {
    nombre: "Joaquin",
    edad: 68,
    añosEducando: 48,
    tel: 435465,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Lunes y Miercoles",
        Aula: 10,
      },
    ],
  },
  // 334 DATOS
  {
    nombre: "Natalia",
    edad: 30,
    añosEducando: 10,
    tel: 890075,
    Cursos: [
      {
        Nombre: "Biologia",
        Dia: "Martes y Jueves",
        Aula: 10,
      },
    ],
  },
  {
    nombre: "Luis",
    edad: 31,
    añosEducando: 11,
    tel: 214567,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Lunes y Miercoles",
        Aula: 10,
      },
    ],
  },
  {
    nombre: "Eva",
    edad: 32,
    añosEducando: 12,
    tel: 445566,
    Cursos: [
      {
        Nombre: "Geografia",
        Dia: "Martes y Jueves",
        Aula: 10,
      },
    ],
  },
  {
    nombre: "Pablo",
    edad: 33,
    añosEducando: 13,
    tel: 346789,
    Cursos: [
      {
        Nombre: "Educacion fisica",
        Dia: "Lunes y Miercoles",
        Aula: 10,
      },
    ],
  },
  {
    nombre: "Lorena",
    edad: 34,
    añosEducando: 14,
    tel: 126789,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Martes y Jueves",
        Aula: 10,
      },
    ],
  },
  {
    nombre: "Javier",
    edad: 35,
    añosEducando: 15,
    tel: 213456,
    Cursos: [
      {
        Nombre: "fisica",
        Dia: "Lunes y Miercoles",
        Aula: 10,
      },
    ],
  },
  {
    nombre: "Ana",
    edad: 36,
    añosEducando: 16,
    tel: 213456,
    Cursos: [
      {
        Nombre: "Matematicas",
        Dia: "Martes y Jueves",
        Aula: 10,
      },
    ],
  },
  {
    nombre: "Jose",
    edad: 37,
    añosEducando: 17,
    tel: 789000,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Lunes y Miercoles",
        Aula: 10,
      },
    ],
  },
  {
    nombre: "Monica",
    edad: 38,
    añosEducando: 18,
    tel: 234567,
    Cursos: [
      {
        Nombre: "Artistica",
        Dia: "Martes y Jueves",
        Aula: 10,
      },
    ],
  },
  {
    nombre: "Antonio",
    edad: 39,
    añosEducando: 19,
    tel: 678900,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Lunes y Miercoles",
        Aula: 10,
      },
    ],
  },
  {
    nombre: "Sandra",
    edad: 40,
    añosEducando: 20,
    tel: 546789,
    Cursos: [
      {
        Nombre: "Quimica",
        Dia: "Martes y Jueves",
        Aula: 10,
      },
    ],
  },
  {
    nombre: "Carlos",
    edad: 41,
    añosEducando: 21,
    tel: 234567,
    Cursos: [
      {
        Nombre: "Etica",
        Dia: "Lunes y Miercoles",
        Aula: 10,
      },
    ],
  },
  {
    nombre: "Maria",
    edad: 42,
    añosEducando: 22,
    tel: 214567,
    Cursos: [
      {
        Nombre: "Español",
        Dia: "Martes y Jueves",
        Aula: 21,
      },
    ],
  },
  {
    nombre: "Jorge",
    edad: 43,
    añosEducando: 23,
    tel: 213455,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Lunes y Miercoles",
        Aula: 21,
      },
    ],
  },
  {
    nombre: "Marta",
    edad: 44,
    añosEducando: 24,
    tel: 213477,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Martes y Jueves",
        Aula: 21,
      },
    ],
  },
  {
    nombre: "David",
    edad: 45,
    añosEducando: 25,
    tel: 325689,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Lunes y Miercoles",
        Aula: 21,
      },
    ],
  },
  {
    nombre: "Laura",
    edad: 46,
    añosEducando: 26,
    tel: 123456,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Martes y Jueves",
        Aula: 21,
      },
    ],
  },
  {
    nombre: "Fernando",
    edad: 21,
    añosEducando: 27,
    tel: 344577,
    Cursos: [
      {
        Nombre: "Geografia",
        Dia: "Lunes y Miercoles",
        Aula: 21,
      },
    ],
  },
  {
    nombre: "Carmen",
    edad: 48,
    añosEducando: 28,
    tel: 325678,
    Cursos: [
      {
        Nombre: "Educacion fisica",
        Dia: "Martes y Jueves",
        Aula: 21,
      },
    ],
  },
  {
    nombre: "Roberto",
    edad: 49,
    añosEducando: 29,
    tel: 214578,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Lunes y Miercoles",
        Aula: 21,
      },
    ],
  },
  // 414 DATOS
  {
    nombre: "Raul",
    edad: 50,
    añosEducando: 30,
    tel: 325678,
    Cursos: [
      {
        Nombre: "Biologia",
        Dia: "Martes y Jueves",
        Aula: 21,
      },
    ],
  },
  {
    nombre: "Elena",
    edad: 51,
    añosEducando: 31,
    tel: 214578,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Lunes y Miercoles",
        Aula: 21,
      },
    ],
  },
  {
    nombre: "Jose",
    edad: 52,
    añosEducando: 32,
    tel: 456788,
    Cursos: [
      {
        Nombre: "Geografia",
        Dia: "Martes y Jueves",
        Aula: 21,
      },
    ],
  },
  {
    nombre: "Cristina",
    edad: 53,
    añosEducando: 33,
    tel: 326789,
    Cursos: [
      {
        Nombre: "Educacion fisica",
        Dia: "Lunes y Miercoles",
        Aula: 21,
      },
    ],
  },
  {
    nombre: "Francisco",
    edad: 54,
    añosEducando: 34,
    tel: 213456,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Martes y Jueves",
        Aula: 21,
      },
    ],
  },
  {
    nombre: "Isabel",
    edad: 55,
    añosEducando: 35,
    tel: 325678,
    Cursos: [
      {
        Nombre: "fisica",
        Dia: "Lunes y Miercoles",
        Aula: 21,
      },
    ],
  },
  {
    nombre: "Roberto",
    edad: 56,
    añosEducando: 36,
    tel: 215677,
    Cursos: [
      {
        Nombre: "Matematicas",
        Dia: "Martes y Jueves",
        Aula: 21,
      },
    ],
  },
  {
    nombre: "Laura",
    edad: 57,
    añosEducando: 37,
    tel: 890999,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Lunes y Miercoles",
        Aula: 21,
      },
    ],
  },
  {
    nombre: "Miguel",
    edad: 58,
    añosEducando: 38,
    tel: 123456,
    Cursos: [
      {
        Nombre: "Artistica",
        Dia: "Martes y Jueves",
        Aula: 21,
      },
    ],
  },
  {
    nombre: "Sara",
    edad: 59,
    añosEducando: 39,
    tel: 325678,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Lunes y Miercoles",
        Aula: 21,
      },
    ],
  },
  {
    nombre: "Javier",
    edad: 60,
    añosEducando: 40,
    tel: 325678,
    Cursos: [
      {
        Nombre: "Quimica",
        Dia: "Martes y Jueves",
        Aula: 21,
      },
    ],
  },
  {
    nombre: "Maria",
    edad: 61,
    añosEducando: 41,
    tel: 214366,
    Cursos: [
      {
        Nombre: "Etica",
        Dia: "Lunes y Miercoles",
        Aula: 19,
      },
    ],
  },
  {
    nombre: "Pablo",
    edad: 62,
    añosEducando: 42,
    tel: 214566,
    Cursos: [
      {
        Nombre: "Español",
        Dia: "Martes y Jueves",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Eva",
    edad: 63,
    añosEducando: 43,
    tel: 890043,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Lunes y Miercoles",
        Aula: 13,
      },
    ],
  },
  {
    nombre: "Carlos",
    edad: 64,
    añosEducando: 44,
    tel: 125666,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Martes y Jueves",
        Aula: 10,
      },
    ],
  },
  {
    nombre: "Marta",
    edad: 65,
    añosEducando: 21,
    tel: 345689,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Lunes y Miercoles",
        Aula: 13,
      },
    ],
  },
  {
    nombre: "Jorge",
    edad: 66,
    añosEducando: 32,
    tel: 435689,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Martes y Jueves",
        Aula: 10,
      },
    ],
  },
  {
    nombre: "Natalia",
    edad: 67,
    añosEducando: 21,
    tel: 456789,
    Cursos: [
      {
        Nombre: "Geografia",
        Dia: "Lunes y Miercoles",
        Aula: 18,
      },
    ],
  },
  {
    nombre: "Luis",
    edad: 68,
    añosEducando: 14,
    tel: 125678,
    Cursos: [
      {
        Nombre: "Educacion fisica",
        Dia: "Martes y Jueves",
        Aula: 16,
      },
    ],
  },
  {
    nombre: "Elena",
    edad: 69,
    añosEducando: 22,
    tel: 123456,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Lunes y Miercoles",
        Aula: 16,
      },
    ],
  },
  // 434 DATOS
  {
    nombre: "Antonio",
    edad: 35,
    añosEducando: 25,
    tel: 215694,
    Cursos: [
      {
        Nombre: "Ciencias sociales ",
        Dia: "Miercoles y Viernes",
        Aula: 24,
      },
    ],
  },
  {
    nombre: "Lorena",
    edad: 48,
    añosEducando: 20,
    tel: 617824,
    Cursos: [
      {
        Nombre: "Artistica",
        Dia: "Lunes y Jueves",
        Aula: 28,
      },
    ],
  },
  {
    nombre: "Roberto",
    edad: 37,
    añosEducando: 16,
    tel: 738169,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Martes y Viernes",
        Aula: 25,
      },
    ],
  },
  {
    nombre: "Silvia",
    edad: 43,
    añosEducando: 18,
    tel: 941827,
    Cursos: [
      {
        Nombre: "Matematicas",
        Dia: "Miercoles y Viernes",
        Aula: 20,
      },
    ],
  },
  {
    nombre: "Daniel",
    edad: 32,
    añosEducando: 14,
    tel: 861749,
    Cursos: [
      {
        Nombre: "Fisica",
        Dia: "Lunes y Jueves",
        Aula: 21,
      },
    ],
  },
  {
    nombre: "Ana",
    edad: 45,
    añosEducando: 12,
    tel: 127359,
    Cursos: [
      {
        Nombre: "Lecto escritura",
        Dia: "Martes y Viernes",
        Aula: 30,
      },
    ],
  },
  {
    nombre: "Francisco",
    edad: 39,
    añosEducando: 10,
    tel: 974682,
    Cursos: [
      {
        Nombre: "Quimica",
        Dia: "Miercoles y Jueves",
        Aula: 23,
      },
    ],
  },
  {
    nombre: "Elena",
    edad: 51,
    añosEducando: 8,
    tel: 836592,
    Cursos: [
      {
        Nombre: "Geografia",
        Dia: "Lunes y Martes",
        Aula: 27,
      },
    ],
  },
  {
    nombre: "Miguel",
    edad: 34,
    añosEducando: 6,
    tel: 369148,
    Cursos: [
      {
        Nombre: "Biologia",
        Dia: "Martes y Jueves",
        Aula: 23,
      },
    ],
  },
  {
    nombre: "Carmen",
    edad: 52,
    añosEducando: 4,
    tel: 592837,
    Cursos: [
      {
        Nombre: "Español",
        Dia: "Lunes y Viernes",
        Aula: 21,
      },
    ],
  },
  {
    nombre: "Javier",
    edad: 42,
    añosEducando: 2,
    tel: 874315,
    Cursos: [
      {
        Nombre: "Ciencias sociales",
        Dia: "Miercoles y Viernes",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Isabel",
    edad: 36,
    añosEducando: 5,
    tel: 132459,
    Cursos: [
      {
        Nombre: "Educacion Fisica",
        Dia: "Martes y Jueves",
        Aula: 21,
      },
    ],
  },
  {
    nombre: "Pablo",
    edad: 49,
    añosEducando: 7,
    tel: 935748,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Lunes y Martes",
        Aula: 30,
      },
    ],
  },
  {
    nombre: "Sara",
    edad: 38,
    añosEducando: 9,
    tel: 835742,
    Cursos: [
      {
        Nombre: "Filosofia",
        Dia: "Miercoles y Jueves",
        Aula: 26,
      },
    ],
  },
  {
    nombre: "David",
    edad: 40,
    añosEducando: 11,
    tel: 752934,
    Cursos: [
      {
        Nombre: "Fisica",
        Dia: "Martes y Viernes",
        Aula: 28,
      },
    ],
  },
  {
    nombre: "Maria",
    edad: 44,
    añosEducando: 13,
    tel: 379245,
    Cursos: [
      {
        Nombre: "Quimica",
        Dia: "Lunes y Jueves",
        Aula: 23,
      },
    ],
  },
  {
    nombre: "Jose",
    edad: 41,
    añosEducando: 15,
    tel: 374259,
    Cursos: [
      {
        Nombre: "Español",
        Dia: "Miercoles y Viernes",
        Aula: 21,
      },
    ],
  },
  {
    nombre: "Laura",
    edad: 53,
    añosEducando: 17,
    tel: 832547,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Lunes y Martes",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Manuel",
    edad: 33,
    añosEducando: 19,
    tel: 294753,
    Cursos: [
      {
        Nombre: "Ciencias sociales ",
        Dia: "Martes y Jueves",
        Aula: 21,
      },
    ],
  },
  {
    nombre: "Eva",
    edad: 47,
    añosEducando: 21,
    tel: 574923,
    Cursos: [
      {
        Nombre: "Lecto escritura",
        Dia: "Lunes y Viernes",
        Aula: 30,
      },
    ],
  },
  // 454 DATOS
  {
    nombre: "Raul",
    edad: 35,
    anosEducando: 25,
    tel: 215694,
    Cursos: [
      {
        Nombre: "Matematicas",
        Dia: "Lunes y Jueves",
        Aula: 23,
      },
    ],
  },
  {
    nombre: "Lorena",
    edad: 48,
    anosEducando: 20,
    tel: 617824,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Martes y Viernes",
        Aula: 21,
      },
    ],
  },
  {
    nombre: "Roberto",
    edad: 37,
    anosEducando: 16,
    tel: 738169,
    Cursos: [
      {
        Nombre: "Quimica",
        Dia: "Martes y Jueves",
        Aula: 23,
      },
    ],
  },
  {
    nombre: "Silvia",
    edad: 43,
    anosEducando: 18,
    tel: 941827,
    Cursos: [
      {
        Nombre: "Educacion Fisica",
        Dia: "Lunes y Jueves",
        Aula: 23,
      },
    ],
  },
  {
    nombre: "Daniel",
    edad: 32,
    anosEducando: 14,
    tel: 861749,
    Cursos: [
      {
        Nombre: "Artistica",
        Dia: "Lunes y Miercoles",
        Aula: 23,
      },
    ],
  },
  // 459 DATOS
  {
    nombre: "Laura",
    edad: 42,
    añosEducando: 15,
    tel: 654321,
    Cursos: [
      {
        Nombre: "Historia",
        Dia: "Martes y Jueves",
        Aula: 10,
      },
      {
        Nombre: "Biologia",
        Dia: "Lunes y Miercoles",
        Aula: 11,
      },
    ],
  },
  {
    nombre: "Pedro",
    edad: 39,
    añosEducando: 12,
    tel: 987654,
    Cursos: [
      {
        Nombre: "Matematicas",
        Dia: "Martes y Jueves",
        Aula: 12,
      },
      {
        Nombre: "Fisica",
        Dia: "Lunes y Miercoles",
        Aula: 13,
      },
    ],
  },
  {
    nombre: "Carmen",
    edad: 45,
    añosEducando: 18,
    tel: 123789,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Martes y Jueves",
        Aula: 14,
      },
      {
        Nombre: "Economia",
        Dia: "Lunes y Miercoles",
        Aula: 15,
      },
    ],
  },
  {
    nombre: "Carlos",
    edad: 50,
    añosEducando: 22,
    tel: 321456,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Martes y Jueves",
        Aula: 16,
      },
      {
        Nombre: "Musica",
        Dia: "Lunes y Miercoles",
        Aula: 17,
      },
    ],
  },
  {
    nombre: "Sara",
    edad: 47,
    añosEducando: 20,
    tel: 789321,
    Cursos: [
      {
        Nombre: "Historia del Arte",
        Dia: "Martes y Jueves",
        Aula: 18,
      },
      {
        Nombre: "Geografia",
        Dia: "Lunes y Miercoles",
        Aula: 19,
      },
    ],
  },
  {
    nombre: "Miguel",
    edad: 48,
    añosEducando: 21,
    tel: 456789,
    Cursos: [
      {
        Nombre: "Educacion Fisica",
        Dia: "Martes y Jueves",
        Aula: 20,
      },
      {
        Nombre: "Filosofia",
        Dia: "Lunes y Miercoles",
        Aula: 21,
      },
    ],
  },
  {
    nombre: "Elena",
    edad: 44,
    añosEducando: 19,
    tel: 987123,
    Cursos: [
      {
        Nombre: "Psicologia",
        Dia: "Martes y Jueves",
        Aula: 22,
      },
      {
        Nombre: "Quimica",
        Dia: "Lunes y Miercoles",
        Aula: 23,
      },
    ],
  },
  {
    nombre: "Javier",
    edad: 46,
    añosEducando: 20,
    tel: 654987,
    Cursos: [
      {
        Nombre: "Fisica",
        Dia: "Martes y Jueves",
        Aula: 24,
      },
      {
        Nombre: "Arte",
        Dia: "Lunes y Miercoles",
        Aula: 25,
      },
    ],
  },
  {
    nombre: "Natalia",
    edad: 49,
    añosEducando: 21,
    tel: 321789,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Martes y Jueves",
        Aula: 26,
      },
      {
        Nombre: "Biologia",
        Dia: "Lunes y Miercoles",
        Aula: 27,
      },
    ],
  },
  {
    nombre: "Luis",
    edad: 41,
    añosEducando: 16,
    tel: 789654,
    Cursos: [
      {
        Nombre: "Matematicas",
        Dia: "Martes y Jueves",
        Aula: 28,
      },
      {
        Nombre: "Economia",
        Dia: "Lunes y Miercoles",
        Aula: 29,
      },
    ],
  },
  {
    nombre: "Maria",
    edad: 34,
    añosEducando: 7,
    tel: 654123,
    Cursos: [
      {
        Nombre: "Historia",
        Dia: "Martes y Jueves",
        Aula: 10,
      },
      {
        Nombre: "Biologia",
        Dia: "Lunes y Miercoles",
        Aula: 11,
      },
    ],
  },
  {
    nombre: "Antonio",
    edad: 40,
    añosEducando: 15,
    tel: 987789,
    Cursos: [
      {
        Nombre: "Matematicas",
        Dia: "Martes y Jueves",
        Aula: 12,
      },
      {
        Nombre: "Fisica",
        Dia: "Lunes y Miercoles",
        Aula: 13,
      },
    ],
  },
  {
    nombre: "Eva",
    edad: 38,
    añosEducando: 10,
    tel: 123987,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Martes y Jueves",
        Aula: 14,
      },
      {
        Nombre: "Economia",
        Dia: "Lunes y Miercoles",
        Aula: 15,
      },
    ],
  },
  {
    nombre: "Jose",
    edad: 48,
    añosEducando: 20,
    tel: 321789,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Martes y Jueves",
        Aula: 16,
      },
      {
        Nombre: "Musica",
        Dia: "Lunes y Miercoles",
        Aula: 17,
      },
    ],
  },
  {
    nombre: "Laura",
    edad: 36,
    añosEducando: 8,
    tel: 789654,
    Cursos: [
      {
        Nombre: "Historia del Arte",
        Dia: "Martes y Jueves",
        Aula: 18,
      },
      {
        Nombre: "Geografia",
        Dia: "Lunes y Miercoles",
        Aula: 19,
      },
    ],
  },
  {
    nombre: "Miguel",
    edad: 49,
    añosEducando: 21,
    tel: 456123,
    Cursos: [
      {
        Nombre: "Educacion Fisica",
        Dia: "Martes y Jueves",
        Aula: 20,
      },
      {
        Nombre: "Filosofia",
        Dia: "Lunes y Miercoles",
        Aula: 21,
      },
    ],
  },
  {
    nombre: "Elena",
    edad: 35,
    añosEducando: 9,
    tel: 987321,
    Cursos: [
      {
        Nombre: "Psicologia",
        Dia: "Martes y Jueves",
        Aula: 22,
      },
      {
        Nombre: "Quimica",
        Dia: "Lunes y Miercoles",
        Aula: 23,
      },
    ],
  },
  {
    nombre: "Javier",
    edad: 47,
    añosEducando: 19,
    tel: 654789,
    Cursos: [
      {
        Nombre: "Fisica",
        Dia: "Martes y Jueves",
        Aula: 24,
      },
      {
        Nombre: "Arte",
        Dia: "Lunes y Miercoles",
        Aula: 25,
      },
    ],
  },
  {
    nombre: "Natalia",
    edad: 37,
    añosEducando: 11,
    tel: 321456,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Martes y Jueves",
        Aula: 26,
      },
      {
        Nombre: "Biologia",
        Dia: "Lunes y Miercoles",
        Aula: 27,
      },
    ],
  },
  {
    nombre: "Luis",
    edad: 43,
    añosEducando: 13,
    tel: 789123,
    Cursos: [
      {
        Nombre: "Matematicas",
        Dia: "Martes y Jueves",
        Aula: 28,
      },
      {
        Nombre: "Economia",
        Dia: "Lunes y Miercoles",
        Aula: 29,
      },
    ],
  },
  {
    nombre: "Lucia",
    edad: 34,
    anosEducando: 10,
    tel: 234567,
    Cursos: [
      {
        Nombre: "Matematicas",
        Dia: "Lunes y Miercoles",
        Aula: 11,
      },
    ],
  },
  {
    nombre: "Roberto",
    edad: 36,
    anosEducando: 12,
    tel: 345678,
    Cursos: [
      {
        Nombre: "Historia",
        Dia: "Lunes y Miercoles",
        Aula: 12,
      },
    ],
  },
  {
    nombre: "Isabel",
    edad: 38,
    anosEducando: 14,
    tel: 456789,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Lunes y Miercoles",
        Aula: 13,
      },
    ],
  },
  {
    nombre: "Pedro",
    edad: 40,
    anosEducando: 16,
    tel: 567890,
    Cursos: [
      {
        Nombre: "Tecnologia",
        Dia: "Lunes y Miercoles",
        Aula: 14,
      },
    ],
  },
  {
    nombre: "Sara",
    edad: 42,
    anosEducando: 18,
    tel: 678901,
    Cursos: [
      {
        Nombre: "Historia del Arte",
        Dia: "Lunes y Miercoles",
        Aula: 15,
      },
    ],
  },
  {
    nombre: "Miguel",
    edad: 44,
    anosEducando: 20,
    tel: 789012,
    Cursos: [
      {
        Nombre: "Educacion Fisica",
        Dia: "Lunes y Miercoles",
        Aula: 16,
      },
    ],
  },
  {
    nombre: "Elena",
    edad: 46,
    anosEducando: 22,
    tel: 890123,
    Cursos: [
      {
        Nombre: "Psicologia",
        Dia: "Lunes y Miercoles",
        Aula: 17,
      },
    ],
  },
  {
    nombre: "Javier",
    edad: 48,
    anosEducando: 24,
    tel: 901234,
    Cursos: [
      {
        Nombre: "Fisica",
        Dia: "Lunes y Miercoles",
        Aula: 18,
      },
    ],
  },
  {
    nombre: "Natalia",
    edad: 50,
    anosEducando: 26,
    tel: 123456,
    Cursos: [
      {
        Nombre: "Ingles",
        Dia: "Lunes y Miercoles",
        Aula: 19,
      },
    ],
  },
  {
    nombre: "Luis",
    edad: 52,
    anosEducando: 28,
    tel: 234567,
    Cursos: [
      {
        Nombre: "Matematicas",
        Dia: "Lunes y Miercoles",
        Aula: 20,
      },
    ],
  },

  {
    nombre: "Luis",
    edad: 52,
    anosEducando: 28,
    tel: 234567,
    Cursos: [
      {
        Nombre: "Matematicas",
        Dia: "Lunes y Miercoles",
        Aula: 20,
      },
    ],
  },
  {
    nombre: "Roberto",
    edad: 36,
    anosEducando: 12,
    tel: 345678,
    Cursos: {
      Nombre: "Historia",
      Dia: "Lunes y Miercoles",
      Aula: 12,
    },
  },
  {
    nombre: "Isabel",
    edad: 38,
    anosEducando: 14,
    tel: 456789,
    Cursos: {
      Nombre: "Ingles",
      Dia: "Lunes y Miercoles",
      Aula: 13,
    },
  },
  {
    nombre: "Pedro",
    edad: 40,
    anosEducando: 16,
    tel: 567890,
    Cursos: {
      Nombre: "Tecnologia",
      Dia: "Lunes y Miercoles",
      Aula: 14,
    },
  },
  {
    nombre: "Sara",
    edad: 42,
    anosEducando: 18,
    tel: 678901,
    Cursos: {
      Nombre: "Historia del Arte",
      Dia: "Lunes y Miercoles",
      Aula: 15,
    },
  },
  {
    nombre: "Miguel",
    edad: 44,
    anosEducando: 20,
    tel: 789012,
    Cursos: {
      Nombre: "Educacion Fisica",
      Dia: "Lunes y Miercoles",
      Aula: 16,
    },
  },
  {
    nombre: "Elena",
    edad: 46,
    anosEducando: 22,
    tel: 890123,
    Cursos: {
      Nombre: "Psicologia",
      Dia: "Lunes y Miercoles",
      Aula: 17,
    },
  },
  {
    nombre: "Javier",
    edad: 48,
    anosEducando: 24,
    tel: 901234,
    Cursos: {
      Nombre: "Fisica",
      Dia: "Lunes y Miercoles",
      Aula: 18,
    },
  },
  {
    nombre: "Natalia",
    edad: 50,
    anosEducando: 26,
    tel: 123456,
    Cursos: {
      Nombre: "Ingles",
      Dia: "Lunes y Miercoles",
      Aula: 19,
    },
  },
  {
    nombre: "Luis",
    edad: 52,
    anosEducando: 28,
    tel: 234567,
    Cursos: {
      Nombre: "Matematicas",
      Dia: "Lunes y Miercoles",
      Aula: 20,
    },
  },
  {
    nombre: "Alberto",
    edad: 34,
    anosEducando: 12,
    tel: 234567,
    Cursos: {
      Nombre: "Matematicas",
      Dia: "Lunes y Miercoles",
      Aula: 20,
    },
  },
]);

//////////////SubDocumentos

//encontrar en el subdocumento el aula 30
// db.Maestros.find({'Cursos.Aula':30});

//encontrar en el subdocumento la materia que el maestro enseña 
// db.Maestros.find({'Cursos.Nombre':'Matematicas'});

//encontrar en el subdocumento el nombre de la materia que el maestro enseña con edad mayor o igual 27
// db.Maestros.find({'Cursos.Nombre':'Matematicas',edad:{$gte:27}});

//eliminar el Maestros donde la materia que enseña es Biología
// db.Maestros.deleteOne({
//   "Cursos.Nombre": "Biología",
// });

// //actualizar la materia que enseña el maestro donde añosEducando sea 28
// db.Maestros.updateOne(
//   { añosEducando: 12 },
//   { $set: { "Cursos.Nombre": "Fisica" } }
// );


////////////Indice Simple-Indice Compuesto

// // Crear un indice en "nombre"
// db.Maestros.createIndex({nombre : 1});

// Encontrar todos los maestros mostrando solo el campo "nombre" y ordenarlos en orden ascendente
// db.Maestros.find({},{nombre:1}).sort({nombre:1});

// Crear un indice compuesto en los campos "nombre" y "edad"
// Encontrar todos los Maestros que sean juan y la materia que enseña sea "Historia"
// db.Maestros.createIndex({nombre:1 , edad:1});
// db.Maestros.find({nombre:'Luis','Cursos.Nombre':'Historia'});

////Agregaciones

// filtrar Maestros con nombre "Sofia" con edad mayor 25
// db.Maestros.aggregate([
//   {$match: {
//     nombre: 'Sofia', edad:{$gt:25}
//   }}
// ]);

// proyectar solo las propiedades "nombre", "añosEducando" y "tel", excluyendo "_id"
// db.Maestros.aggregate([
//   {$project: {
//     _id: 0, nombre: 1, añosEducando: 1, tel: 1
//   }}
// ]);



// crear una colección 'aggResults3' con los resultados de la agregación anterior y luego mostrarlos.
// db.Maestros.aggregate([
//   {
//     $group: {
//       _id: "$añosEducando",
//       totalDocs: {
//         $sum: 1,
//       },
//     },
//   },
//   { $out: "aggResults3" },
// ]);
// db.aggResults3.find();


// filtrar por nombre "Luis" y desglosar el campo Cursos
// db.Maestros.aggregate([
//   {$match: {nombre: 'Luis'}},
//   {$unwind: '$Cursos'}
// ]);

// filtrar por nombre "Luis", desglosar "Cursos", Nombre,aula y ordenar de forma descendiente
// db.Maestros.aggregate([
//   {$match: {nombre: 'Luis'}},
//   {$unwind: '$Cursos'},
//   { $project: { _id: 0, 'Cursos.Nombre': 1, 'Cursos.Aula': 1 } },
//   { $sort: { 'Cursos.Nombre': -1 } },
// ]);

// filtrar por nombre "Luis", desglosar "Cursos", Nombre,aula y ordenar de forma descendiente y limitar dos registros
// db.Maestros.aggregate([
//   {$match: {nombre: 'Luis'}},
//   {$unwind: '$Cursos'},
//   { $project: { _id: 0, 'Cursos.Nombre': 1, 'Cursos.Aula': 1 } },
//   { $sort: { 'Cursos.Nombre': -1 } },
//   {$limit: 2}
// ]);


// desglosar '$Cursos' en todos los Maestros y agregar un campo "diasDescanso" con valor 15.
// db.Maestros.aggregate([
//   {$unwind: '$Cursos' },
//   {$addFields: {diasDescanso: 15}}
// ]);

// actualizar el campo "diasDescanso" en documentos con nombre "Lucas" a 15.
// db.Maestros.updateMany(
//   {nombre: 'Lucas'},
//   {$set: {diasDescanso: 15}}
// );




// contar el total de documentos desglosados de 'Cursos' en todas los Maestros
// db.Maestros.aggregate([
//   {$unwind: '$Cursos' },
//   {$count: 'total_documents'}
// ]);



// encontrar maestros mayor o igual a 18,se relaciona los maestros con Maestros a traves del nombre del curso de los maestros y las materia esencial de los Maestros
// db.Maestros.aggregate([
//   { $match: { edad: { $gte: 18 } } },
//   { $project: { _id: 0, edad: 0, tel: 0 } },
//   {
//     $lookup: {
//       from: "Maestros",
//       localField: "Cursos.Nombre",
//       foreignField: "Cursos.esencial",
//       as: "Libro_info",
//     },
//   },
// ]);



// contar el numero de Maestros que tienen el numero igual de edad
//db.Maestros.aggregate([{ $sortByCount: '$edad' }]);

// desglosar los "Alumnos" de todos los Maestros, agrupar por Aula y sumar el numero de Alumnos
// db.Maestros.aggregate([
//   { $unwind: "$Alumnos" },
//   {
//     $group: {
//       _id: "$Alumnos.aula",
//       TotalAlumnos: { $sum: "$Alumnos.numero" },
//     },
//   },
// ]);
