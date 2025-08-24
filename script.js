const AppConfig = {
    // Configuración general del sistema (sin cambios)
    settings: {
        xpPerQuestion: 25,
        xpPerLevel: 100,
        maxLevel: 5,
        storageKeys: {
            gameState: 'ligaClaro_gameState',
            gameResults: 'ligaClaro_gameResults',
            currentUser: 'ligaClaro_currentUser'
        }
    },
    
    // Datos de los gimnasios y preguntas externalizados
    gymsData: {
        1: {
            name: "Gimnasio Novato - Introducción",
            leader: "🎫 Profesor Claro",
            dialogue: "¡Bienvenido! Veamos si conoces los conceptos básicos de portabilidad.",
            questions: [
                {
                    question: "¿Qué documento es INDISPENSABLE para iniciar una portabilidad Postpago?",
                    options: ["Recibo de luz", "DNI vigente", "Contrato anterior", "Foto del chip"],
                    correctAnswer: 1
                },
                {
                    question: "Un cliente paga S/85 en su plan actual. ¿Qué plan de Claro le ofreces como mejor alternativa?",
                    options: ["Plan Foco S/79.90", "Plan de S/159.90", "Plan de S/95.90", "Plan de S/69.90"],
                    correctAnswer: 0 // Corregido a 0 para el plan de S/79.90
                },
                {
                    question: "¿Por cuánto tiempo es gratis el CLARO VIDEO y en cuántos dispositivos se puede compartir?",
                    options: [
                        "2 años gratis en 4 dispositivos",
                        "24 meses gratis en 5 dispositivos",
                        "12 meses gratis en 2 dispositivos",
                        "24 meses en 1 dispositivo"
                    ],
                    correctAnswer: 1
                }
            ]
        },
        2: {
            name: "Gimnasio Técnico - Proceso",
            leader: "⚙️ Ingeniero Tech",
            dialogue: "Ahora profundizaremos en el proceso técnico. ¡Demuestra tu conocimiento!",
            questions: [
                {
                    question: "¿Qué color en el sistema SISAC indica que el cliente califica para portabilidad?",
                    options: ["Amarillo", "Verde", "Azul", "Blanco"],
                    correctAnswer: 1
                },
                {
                    question: "¿Qué sistema utilizamos para verificar el tiempo de la línea del cliente?",
                    options: ["Checa tus Líneas", "Consulta de Portabilidad OSIPTEL", "SISAC", "Portal de Factibilidad"],
                    correctAnswer: 1
                },
                {
                    question: "¿Cuál es el plazo de entrega para delivery en Lima?",
                    options: ["9 a. m. - 1 p. m.", "2 p. m. - 6 p. m.", "1 hora", "Ambos horarios son opciones de entrega"],
                    correctAnswer: 2 // Corregido a 2, el rango de entrega para delivery para lima es de 1 hora
                }
            ]
        },
        3: {
            name: "Gimnasio Especialista - Documentación",
            leader: "📋 Especialista Docs",
            dialogue: "La documentación es clave. ¿Estás preparado para este desafío?",
            questions: [
                {
                    question: "¿Qué se debe hacer si un cliente de Entel tiene una deuda vencida?",
                    options: [
                        "Continuar con el proceso sin problema",
                        "Solicitarle que realice el pago de la deuda antes de continuar",
                        "Indicarle que se comunique cuando haya cancelado para iniciar el proceso",
                        "Terminar la llamada"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "¿Cuándo es obligatorio presentar la acreditación de pago?",
                    options: [
                        "Siempre es necesaria",
                        "Solo para empresas",
                        "Cuando se realiza una venta con recojo en tienda",
                        "Cuando se realiza una venta con delivery"
                    ],
                    correctAnswer: 3 // Corregido a 4 para la venta de delivery
                },
                {
                    question: "¿Qué requisitos se deben tener para una portabilidad exitosa?",
                    options: [
                        "La línea debe tener más de 30 días de antigüedad",
                        "La línea debe estar activa, tener más de 30 días y no tener deuda vencida",
                        "La línea debe estar activa y sin deuda vencida",
                        "La línea no debe tener deuda vencida y más de 30 días de antigüedad"
                    ],
                    correctAnswer: 1
                }
            ]
        },
        4: {
            name: "Gimnasio Maestro - Objeciones",
            leader: "🚨 Maestro Persuasión",
            dialogue: "Las objeciones son oportunidades. ¡Demuestra tu maestría!",
            questions: [
                {
                    question: "Cliente dice: 'Mi operador actual es más barato'. ¿Qué respondes?",
                    options: [
                        "Claro también es barato",
                        "Analicemos el valor total: cobertura, velocidad y beneficios incluidos",
                        "Te doy un descuento especial",
                        "Lo barato sale caro"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "¿Cómo manejas la objeción: 'Tengo buena señal, no necesito cambiar'?",
                    options: [
                        "Con '¿Con qué operador estás? Con Claro, además de buena cobertura 4G y 5G, obtendrás internet ilimitado y muchos beneficios más'",
                        " 'Te vamos a dar CLARO VIDEO y CLARO MÚSICA'",
                        " 'Necesitas cambiar, tu operador es malo'",
                        "'Con CLARO te vamos a dar descuentos ilimitados'"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "El cliente dice que a su zona no llega la señal de CLARO. ¿Cuál es la mejor respuesta?",
                    options: [
                        "Es un problema que no podemos solucionar",
                        "Hemos ampliado nuestra cobertura en diferentes zonas. ¿Me puedes brindar tu dirección para verificarlo?",
                        "Eso era antes, ahora le aseguro que sí tendrá",
                        "¿Dónde vives para verificarlo?"
                    ],
                    correctAnswer: 1 // Corregido a 1, la opción "Donde vives" es muy directa y menos profesional
                }
            ]
        },
        5: {
            name: "Gimnasio Campeón - Liga Elite",
            leader: "👑 Campeón Supreme",
            dialogue: "¡El desafío final! Solo los verdaderos maestros llegan aquí.",
            questions: [
                {
                    question: "¿Cuál es la estrategia más efectiva para cerrar una venta de portabilidad?",
                    options: [
                        "Presionar por el precio",
                        "Demostrar valor y beneficios específicos al cliente",
                        "Ofrecer regalos",
                        "Comparar negativamente a la competencia"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "Un cliente quiere portar y contratar el servicio de Internet Fijo Hogar. ¿Cuál es tu enfoque?",
                    options: [
                        "Realizar el alta del servicio hogar primero",
                        "Persuadirlo para realizar la portabilidad primero",
                        "Realizar la porta y el alta a la vez",
                        "Derivar a otro asesor para que le den el servicio Hogar"
                    ],
                    correctAnswer: 1 // Corregido a 1, la opción 2 está mal escrita
                },
                {
                    question: "¿Cuál es el indicador más importante para realizar con éxito una portabilidad?",
                    options: [
                        "Ofrecer descuentos",
                        "Escuchar activamente",
                        "Realizar un buen rebate",
                        "Realizar un buen cierre de venta"
                    ],
                    correctAnswer: 2
                }
            ]
        }
    }
};

// ... El resto del código continúa aquí