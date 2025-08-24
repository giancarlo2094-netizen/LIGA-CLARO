/**
 * LIGA CLARO PERÚ - MAESTRO DE PORTABILIDAD
 * Sistema de Capacitación Gamificado
 * Versión Refactorizada - Arquitectura Modular
 */

// ===== CONFIGURACIÓN Y DATOS DEL JUEGO =====

/**
 * AppConfig: Configuración central y datos externalizado
 * Contiene todos los datos de gimnasios, preguntas y configuración del sistema
 */
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
                    correctAnswer: 0
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
                    correctAnswer: 2
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
                    correctAnswer: 3
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
                    correctAnswer: 1
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
                    correctAnswer: 1
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

// ===== MANAGER DE ALMACENAMIENTO =====

/**
 * StorageManager: Maneja la persistencia de datos en localStorage
 * Implementa funciones seguras de carga y guardado de estado
 */
const StorageManager = {
    /**
     * Guarda datos en localStorage de forma segura
     * @param {string} key - Clave de almacenamiento
     * @param {*} data - Datos a guardar
     */
    save(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            console.log(`💾 Datos guardados en localStorage: ${key}`);
        } catch (error) {
            console.error(`❌ Error guardando en localStorage:`, error);
        }
    },

    /**
     * Carga datos desde localStorage de forma segura
     * @param {string} key - Clave de almacenamiento
     * @param {*} defaultValue - Valor por defecto si no existe
     * @returns {*} Datos cargados o valor por defecto
     */
    load(key, defaultValue = null) {
        try {
            const stored = localStorage.getItem(key);
            if (stored) {
                const parsed = JSON.parse(stored);
                console.log(`📁 Datos cargados desde localStorage: ${key}`);
                return parsed;
            }
        } catch (error) {
            console.error(`❌ Error cargando desde localStorage:`, error);
        }
        return defaultValue;
    },

    /**
     * Elimina datos del localStorage
     * @param {string} key - Clave a eliminar
     */
    remove(key) {
        try {
            localStorage.removeItem(key);
            console.log(`🗑️ Datos eliminados de localStorage: ${key}`);
        } catch (error) {
            console.error(`❌ Error eliminando de localStorage:`, error);
        }
    },

    /**
     * Limpia todo el almacenamiento del juego
     */
    clearAll() {
        const keys = AppConfig.settings.storageKeys;
        Object.values(keys).forEach(key => this.remove(key));
        console.log('🧹 Almacenamiento limpiado completamente');
    }
};

// ===== MANAGER DE AUTENTICACIÓN =====

/**
 * AuthManager: Maneja la autenticación y autorización de usuarios
 * Encapsula la lógica de login y validación de credenciales
 */
const AuthManager = {
    // Estado actual del usuario (encapsulado)
    _currentUser: {
        dni: '',
        userType: '',
        name: ''
    },

    /**
     * Inicializa el sistema de autenticación
     * Carga usuario previo si existe en localStorage
     */
    init() {
        const savedUser = StorageManager.load(AppConfig.settings.storageKeys.currentUser);
        if (savedUser) {
            this._currentUser = savedUser;
            console.log(`👤 Usuario cargado desde localStorage: ${savedUser.name}`);
        }
    },

    /**
     * Valida las credenciales de login
     * @param {string} dni - Documento de identidad
     * @param {string} userType - Tipo de usuario (asesor/formador)
     * @param {string} password - Contraseña (solo para formadores)
     * @returns {Object} Resultado de la validación
     */
    validateLogin(dni, userType, password = '') {
        console.log("🔐 Validando credenciales de login...");

        // Validación básica de DNI
        if (!dni || dni.length < 4) {
            return { 
                success: false, 
                message: 'El DNI debe tener al menos 4 dígitos' 
            };
        }

        // Validación específica por tipo de usuario
        if (userType === 'formador') {
            // NOTA DE SEGURIDAD: En producción, esta validación se haría en el backend
            // La contraseña no debería estar almacenada en el frontend
            if (!password) {
                return { 
                    success: false, 
                    message: 'Por favor, ingrese la contraseña' 
                };
            }
            
            // TODO: En producción, hacer una llamada al backend para validar credenciales
            if (password !== 'C3porta2025') {
                return { 
                    success: false, 
                    message: 'Contraseña incorrecta para el rol de Formador' 
                };
            }
        }

        return { success: true };
    },

    /**
     * Realiza el login del usuario
     * @param {string} dni - Documento de identidad
     * @param {string} userType - Tipo de usuario
     * @param {string} password - Contraseña
     * @returns {boolean} Éxito del login
     */
    login(dni, userType, password = '') {
        const validation = this.validateLogin(dni, userType, password);
        
        if (!validation.success) {
            UIManager.showError(validation.message);
            return false;
        }

        // Crear objeto de usuario
        const userName = userType === 'formador' ? `Formador ${dni}` : `Asesor ${dni}`;
        this._currentUser = { dni, userType, name: userName };

        // Guardar en localStorage para persistencia
        StorageManager.save(AppConfig.settings.storageKeys.currentUser, this._currentUser);

        console.log(`✅ Login exitoso: ${userName} (${userType})`);
        return true;
    },

    /**
     * Cierra la sesión del usuario
     */
    logout() {
        console.log(`🚪 Cerrando sesión de: ${this._currentUser.name}`);
        
        // Limpiar estado del usuario
        this._currentUser = { dni: '', userType: '', name: '' };
        
        // Limpiar localStorage
        StorageManager.remove(AppConfig.settings.storageKeys.currentUser);
    },

    /**
     * Obtiene el usuario actual (solo lectura)
     * @returns {Object} Datos del usuario actual
     */
    getCurrentUser() {
        return { ...this._currentUser }; // Retorna copia para evitar mutaciones
    },

    /**
     * Verifica si hay un usuario logueado
     * @returns {boolean} Estado de login
     */
    isLoggedIn() {
        return this._currentUser.dni !== '';
    }
};

// ===== MANAGER DE INTERFAZ DE USUARIO =====

/**
 * UIManager: Maneja todas las interacciones y animaciones de la UI
 * Encapsula la lógica de mostrar/ocultar pantallas y elementos
 */
const UIManager = {
    // Referencias a elementos del DOM (se inicializan al cargar)
    elements: {},

    /**
     * Inicializa el manager de UI
     * Obtiene referencias a elementos importantes y configura event listeners
     */
    init() {
        console.log("🎨 Inicializando UIManager...");
        
        // Obtener referencias a elementos importantes
        this.elements = {
            // Pantallas principales
            loginOverlay: document.getElementById('loginOverlay'),
            introScreen: document.getElementById('introScreen'),
            mainScreen: document.getElementById('mainScreen'),
            battleScreen: document.getElementById('battleScreen'),
            reportScreen: document.getElementById('reportScreen'),
            championHall: document.getElementById('championHall'),
            
            // Elementos del login
            dniInput: document.getElementById('dniInput'),
            passwordInput: document.getElementById('passwordInput'),
            passwordGroup: document.getElementById('passwordGroup'),
            loginButton: document.getElementById('loginButton'),
            errorMessage: document.getElementById('errorMessage'),
            successMessage: document.getElementById('successMessage'),
            
            // Elementos del juego
            trainerName: document.getElementById('trainerName'),
            playerXP: document.getElementById('playerXP'),
            playerLevel: document.getElementById('playerLevel'),
            badgesCount: document.getElementById('badgesCount'),
            gymsCleared: document.getElementById('gymsCleared'),
            expFill: document.getElementById('expFill'),
            expProgress: document.getElementById('expProgress'),
            
            // Elementos de batalla
            opponentName: document.getElementById('opponentName'),
            dialogueBox: document.getElementById('dialogueBox'),
            questionText: document.getElementById('questionText'),
            moveGrid: document.getElementById('moveGrid'),
            currentQuestion: document.getElementById('currentQuestion'),
            totalQuestions: document.getElementById('totalQuestions'),
            battleResult: document.getElementById('battleResult'),
            resultMessage: document.getElementById('resultMessage'),
            
            // Elementos del reporte
            formadorName: document.getElementById('formadorName'),
            totalUsers: document.getElementById('totalUsers'),
            totalSessions: document.getElementById('totalSessions'),
            avgScore: document.getElementById('avgScore'),
            completionRate: document.getElementById('completionRate')
        };

        this.setupEventListeners();
        console.log("✅ UIManager inicializado correctamente");
    },

    /**
     * Configura todos los event listeners
     */
    setupEventListeners() {
        console.log("🎯 Configurando event listeners de UI...");

        // Event listeners del login
        if (this.elements.dniInput) {
            this.elements.dniInput.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, '');
            });
            this.elements.dniInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.handleLogin();
            });
        }

        if (this.elements.passwordInput) {
            this.elements.passwordInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.handleLogin();
            });
        }

        // Cambio de tipo de usuario
        const userTypeRadios = document.querySelectorAll('input[name="userType"]');
        userTypeRadios.forEach(radio => {
            radio.addEventListener('change', () => {
                this.togglePasswordField(radio.value === 'formador');
            });
        });

        // Botones principales
        const loginButton = this.elements.loginButton;
        if (loginButton) {
            loginButton.addEventListener('click', () => this.handleLogin());
        }

        const startAdventureBtn = document.getElementById('startAdventureBtn');
        if (startAdventureBtn) {
            startAdventureBtn.addEventListener('click', () => GameManager.startAdventure());
        }

        const exportButton = document.getElementById('exportButton');
        if (exportButton) {
            exportButton.addEventListener('click', () => ReportManager.exportData());
        }

        const logoutButton = document.getElementById('logoutButton');
        if (logoutButton) {
            logoutButton.addEventListener('click', () => this.handleLogout());
        }
    },

    /**
     * Maneja el proceso de login
     */
    handleLogin() {
        console.log("🚀 Iniciando proceso de login desde UI...");
        
        const dni = this.elements.dniInput.value.trim();
        const userType = document.querySelector('input[name="userType"]:checked')?.value;
        const password = this.elements.passwordInput.value;

        // Limpiar mensajes anteriores
        this.hideMessages();

        // Validaciones básicas de UI
        if (!dni) {
            this.showError('Por favor, ingrese su DNI o Carné de Extranjería');
            return;
        }

        if (!userType) {
            this.showError('Por favor, seleccione un tipo de usuario');
            return;
        }

        // Intentar login
        const loginSuccess = AuthManager.login(dni, userType, password);
        
        if (loginSuccess) {
            const currentUser = AuthManager.getCurrentUser();
            this.showSuccess(`¡Acceso autorizado como ${currentUser.userType}!`);
            
            // Redirigir según tipo de usuario
            setTimeout(() => {
                if (currentUser.userType === 'formador') {
                    this.showReportScreen();
                } else {
                    this.showGameScreen();
                }
            }, 1500);
        }
    },

    /**
     * Maneja el logout
     */
    handleLogout() {
        console.log("🚪 Procesando logout desde UI...");
        
        AuthManager.logout();
        GameManager.clearGameData();
        this.resetLoginForm();
        this.showLoginScreen();
    },

    /**
     * Muestra/oculta el campo de contraseña
     * @param {boolean} show - Si mostrar o no el campo
     */
    togglePasswordField(show) {
        const passwordGroup = this.elements.passwordGroup;
        const passwordInput = this.elements.passwordInput;
        
        if (show) {
            passwordGroup.classList.add('show');
            passwordInput.required = true;
        } else {
            passwordGroup.classList.remove('show');
            passwordInput.required = false;
            passwordInput.value = '';
        }
    },

    /**
     * Muestra mensaje de error
     * @param {string} message - Mensaje a mostrar
     */
    showError(message) {
        const errorDiv = this.elements.errorMessage;
        errorDiv.textContent = message;
        errorDiv.classList.add('show');
    },

    /**
     * Muestra mensaje de éxito
     * @param {string} message - Mensaje a mostrar
     */
    showSuccess(message) {
        const successDiv = this.elements.successMessage;
        successDiv.textContent = message;
        successDiv.classList.add('show');
    },

    /**
     * Oculta todos los mensajes
     */
    hideMessages() {
        this.elements.errorMessage.classList.remove('show');
        this.elements.successMessage.classList.remove('show');
    },

    /**
     * Oculta todas las pantallas
     */
    hideAllScreens() {
        this.elements.loginOverlay.style.display = 'none';
        this.elements.introScreen.style.display = 'none';
        this.elements.mainScreen.classList.remove('active');
        this.elements.battleScreen.classList.remove('active');
        this.elements.reportScreen.classList.remove('active');
        this.elements.championHall.classList.remove('show');
    },

    /**
     * Muestra la pantalla de login
     */
    showLoginScreen() {
        this.hideAllScreens();
        this.elements.loginOverlay.style.display = 'flex';
    },

    /**
     * Muestra la pantalla del juego
     */
    showGameScreen() {
        console.log("🎮 Mostrando pantalla del juego");
        this.hideAllScreens();
        
        const currentUser = AuthManager.getCurrentUser();
        this.elements.trainerName.textContent = currentUser.name;
        
        // Mostrar pantalla de introducción con animación fluida
        this.elements.introScreen.style.display = 'flex';
        this.elements.introScreen.classList.remove('hidden');
    },

    /**
     * Muestra la pantalla de reporte
     */
    showReportScreen() {
        console.log("📊 Mostrando pantalla de reporte");
        this.hideAllScreens();
        
        const currentUser = AuthManager.getCurrentUser();
        this.elements.formadorName.textContent = currentUser.name;
        
        this.elements.reportScreen.classList.add('active');
        ReportManager.updateStats();
    },

    /**
     * Resetea el formulario de login
     */
    resetLoginForm() {
        this.elements.dniInput.value = '';
        this.elements.passwordInput.value = '';
        document.getElementById('userAsesor').checked = true;
        this.togglePasswordField(false);
        this.hideMessages();
    },

    /**
     * Actualiza la UI del estado del juego
     * @param {Object} gameState - Estado actual del juego
     */
    updateGameUI(gameState) {
        this.elements.playerXP.textContent = gameState.xp;
        this.elements.playerLevel.textContent = gameState.level;
        this.elements.badgesCount.textContent = gameState.badges;
        this.elements.gymsCleared.textContent = gameState.gymsCleared;
        
        const currentLevelXP = gameState.xp % AppConfig.settings.xpPerLevel;
        const xpProgress = (currentLevelXP / AppConfig.settings.xpPerLevel) * 100;
        
        this.elements.expFill.style.width = `${xpProgress}%`;
        this.elements.expProgress.textContent = `${currentLevelXP}/${AppConfig.settings.xpPerLevel} XP`;
    },

    /**
     * Transición fluida entre pantallas
     * @param {string} from - Pantalla actual
     * @param {string} to - Pantalla destino
     */
    transitionScreen(from, to) {
        const fromElement = this.elements[from];
        const toElement = this.elements[to];
        
        if (from === 'introScreen' && to === 'mainScreen') {
            fromElement.classList.add('hidden');
            setTimeout(() => {
                fromElement.style.display = 'none';
                toElement.classList.add('active');
            }, 1000);
        } else if (from === 'mainScreen' && to === 'battleScreen') {
            fromElement.classList.remove('active');
            toElement.classList.add('active');
        } else {
            fromElement.classList.remove('active');
            toElement.classList.add('active');
        }
    }
};

// ===== MANAGER DEL JUEGO =====

/**
 * GameManager: Controla toda la lógica del juego
 * Estado del juego encapsulado con persistencia automática
 */
const GameManager = {
    // Estado del juego (privado, encapsulado)
    _gameState: {
        xp: 0,
        level: 1,
        badges: 0,
        gymsCleared: 0,
        currentGym: null,
        currentQuestion: 0,
        totalQuestions: 0,
        gyms: {
            1: { unlocked: true, completed: false },
            2: { unlocked: false, completed: false },
            3: { unlocked: false, completed: false },
            4: { unlocked: false, completed: false },
            5: { unlocked: false, completed: false }
        }
    },

    // Resultados del juego para tracking
    _gameResults: [],

    /**
     * Inicializa el GameManager
     * Carga estado previo si existe
     */
    init() {
        console.log("🎮 Inicializando GameManager...");
        
        // Cargar estado del juego desde localStorage
        this.loadGameState();
        
        console.log("✅ GameManager inicializado");
    },

    /**
     * Carga el estado del juego desde localStorage
     */
    loadGameState() {
        const savedGameState = StorageManager.load(
            AppConfig.settings.storageKeys.gameState,
            this._gameState
        );
        
        const savedGameResults = StorageManager.load(
            AppConfig.settings.storageKeys.gameResults,
            []
        );

        // Solo cargar si pertenece al usuario actual
        const currentUser = AuthManager.getCurrentUser();
        if (currentUser.dni && savedGameState.userDni === currentUser.dni) {
            this._gameState = savedGameState;
            this._gameResults = savedGameResults;
            console.log("📁 Estado del juego cargado desde localStorage");
        } else {
            // Inicializar estado para nuevo usuario
            this._gameState.userDni = currentUser.dni;
            console.log("🆕 Nuevo estado de juego inicializado");
        }
    },

    /**
     * Guarda el estado actual del juego
     */
    saveGameState() {
        const currentUser = AuthManager.getCurrentUser();
        this._gameState.userDni = currentUser.dni;
        
        StorageManager.save(AppConfig.settings.storageKeys.gameState, this._gameState);
        StorageManager.save(AppConfig.settings.storageKeys.gameResults, this._gameResults);
    },

    /**
     * Limpia los datos del juego
     */
    clearGameData() {
        this._gameResults = [];
        // Resetear estado pero mantener estructura
        this._gameState = {
            xp: 0,
            level: 1,
            badges: 0,
            gymsCleared: 0,
            currentGym: null,
            currentQuestion: 0,
            totalQuestions: 0,
            gyms: {
                1: { unlocked: true, completed: false },
                2: { unlocked: false, completed: false },
                3: { unlocked: false, completed: false },
                4: { unlocked: false, completed: false },
                5: { unlocked: false, completed: false }
            }
        };
        this.saveGameState();
    },

    /**
     * Inicia la aventura (transición de intro a juego principal)
     */
    startAdventure() {
        console.log("🚀 Iniciando aventura...");
        UIManager.transitionScreen('introScreen', 'mainScreen');
        UIManager.updateGameUI(this._gameState);
    },

    /**
     * Inicia un nivel/gimnasio específico
     * @param {number} levelId - ID del gimnasio (1-5)
     */
    startLevel(levelId) {
        console.log(`🎯 Iniciando nivel ${levelId}`);
        
        if (!this._gameState.gyms[levelId].unlocked) {
            console.log("⛔ Gimnasio bloqueado");
            return;
        }

        this._gameState.currentGym = levelId;
        this._gameState.currentQuestion = 0;
        this._gameState.totalQuestions = AppConfig.gymsData[levelId].questions.length;

        UIManager.transitionScreen('mainScreen', 'battleScreen');
        this.setupBattle(levelId);
        this.loadQuestion();
        this.saveGameState();
    },

    /**
     * Configura la batalla/gimnasio
     * @param {number} levelId - ID del gimnasio
     */
    setupBattle(levelId) {
        const gymData = AppConfig.gymsData[levelId];
        
        UIManager.elements.opponentName.textContent = gymData.leader;
        UIManager.elements.dialogueBox.textContent = gymData.dialogue;
        UIManager.elements.totalQuestions.textContent = this._gameState.totalQuestions;
        
        UIManager.elements.battleResult.classList.remove('show');
    },

    /**
     * Carga la pregunta actual
     */
    loadQuestion() {
        const gymData = AppConfig.gymsData[this._gameState.currentGym];
        const questionData = gymData.questions[this._gameState.currentQuestion];
        
        console.log(`📝 Cargando pregunta ${this._gameState.currentQuestion + 1}`);
        
        UIManager.elements.questionText.textContent = questionData.question;
        UIManager.elements.currentQuestion.textContent = this._gameState.currentQuestion + 1;
        
        const moveGrid = UIManager.elements.moveGrid;
        moveGrid.innerHTML = '';
        
        questionData.options.forEach((option, index) => {
            const moveCard = document.createElement('div');
            moveCard.className = 'move-card';
            moveCard.onclick = () => this.selectAnswer(index);
            
            moveCard.innerHTML = `
                <div class="move-name">${String.fromCharCode(65 + index)}. ${option}</div>
                <div class="move-effect">Selecciona esta opción</div>
            `;
            
            moveGrid.appendChild(moveCard);
        });
    },

    /**
     * Procesa la selección de respuesta
     * @param {number} selectedIndex - Índice de la respuesta seleccionada
     */
    selectAnswer(selectedIndex) {
        const gymData = AppConfig.gymsData[this._gameState.currentGym];
        const questionData = gymData.questions[this._gameState.currentQuestion];
        const moveCards = document.querySelectorAll('.move-card');
        
        console.log(`✋ Respuesta seleccionada: ${selectedIndex}`);
        
        // Deshabilitar interacción
        moveCards.forEach(card => {
            card.style.pointerEvents = 'none';
        });
        
        moveCards[selectedIndex].classList.add('selected');
        
        setTimeout(() => {
            // Mostrar respuesta correcta
            moveCards.forEach((card, index) => {
                if (index === questionData.correctAnswer) {
                    card.classList.remove('selected');
                    card.classList.add('correct');
                } else if (index === selectedIndex && index !== questionData.correctAnswer) {
                    card.classList.remove('selected');
                    card.classList.add('incorrect');
                }
            });
            
            const isCorrect = selectedIndex === questionData.correctAnswer;
            
            // Rastrear respuesta para asesores
            const currentUser = AuthManager.getCurrentUser();
            if (currentUser.userType === 'asesor') {
                this.trackAnswer(
                    this._gameState.currentGym,
                    this._gameState.currentQuestion,
                    questionData.question,
                    questionData.options,
                    selectedIndex,
                    questionData.correctAnswer,
                    isCorrect
                );
            }
            
            this.processAnswer(isCorrect);
        }, 500);
    },

    /**
     * Registra la respuesta del usuario
     */
    trackAnswer(gymId, questionIndex, questionText, options, selectedAnswer, correctAnswer, isCorrect) {
        const currentUser = AuthManager.getCurrentUser();
        const result = {
            dni: currentUser.dni,
            gym: AppConfig.gymsData[gymId].name,
            question: questionText,
            options: options,
            selectedAnswer: selectedAnswer,
            correctAnswer: correctAnswer,
            userAnswer: options[selectedAnswer],
            correctAnswerText: options[correctAnswer],
            result: isCorrect ? 'Correcto' : 'Incorrecto',
            score: isCorrect ? AppConfig.settings.xpPerQuestion : 0,
            timestamp: new Date().toISOString()
        };
        
        this._gameResults.push(result);
        this.saveGameState(); // Guardar inmediatamente
        console.log("📝 Respuesta registrada:", result);
    },

    /**
     * Procesa el resultado de la respuesta
     * @param {boolean} isCorrect - Si la respuesta fue correcta
     */
    processAnswer(isCorrect) {
        const resultDiv = UIManager.elements.battleResult;
        const resultMessage = UIManager.elements.resultMessage;
        
        if (isCorrect) {
            this._gameState.xp += AppConfig.settings.xpPerQuestion;
            resultMessage.innerHTML = `
                <h4>🎉 ¡Correcto!</h4>
                <p>Has ganado ${AppConfig.settings.xpPerQuestion} XP. ¡Excelente conocimiento!</p>
            `;
            resultDiv.style.background = 'rgba(46, 213, 115, 0.9)';
        } else {
            resultMessage.innerHTML = `
                <h4>❌ Incorrecto</h4>
                <p>No te preocupes, sigue practicando para mejorar.</p>
            `;
            resultDiv.style.background = 'rgba(255, 56, 56, 0.9)';
        }
        
        this.updateLevel();
        UIManager.updateGameUI(this._gameState);
        resultDiv.classList.add('show');
        
        this.saveGameState();
        console.log(`📊 XP actual: ${this._gameState.xp}`);
    },

    /**
     * Actualiza el nivel del jugador basado en XP
     */
    updateLevel() {
        const newLevel = Math.floor(this._gameState.xp / AppConfig.settings.xpPerLevel) + 1;
        if (newLevel > this._gameState.level) {
            this._gameState.level = newLevel;
            console.log(`📈 ¡Subiste al nivel ${this._gameState.level}!`);
        }
    },

    /**
     * Pasa a la siguiente pregunta
     */
    nextQuestion() {
        UIManager.elements.battleResult.classList.remove('show');
        
        this._gameState.currentQuestion++;
        
        if (this._gameState.currentQuestion >= this._gameState.totalQuestions) {
            this.completeGym();
        } else {
            setTimeout(() => {
                this.loadQuestion();
            }, 500);
        }
    },

    /**
     * Completa un gimnasio
     */
    completeGym() {
        const currentGymId = this._gameState.currentGym;
        
        console.log(`🏆 Gimnasio ${currentGymId} completado`);
        
        this._gameState.gyms[currentGymId].completed = true;
        this._gameState.badges++;
        this._gameState.gymsCleared++;
        
        // Desbloquear siguiente gimnasio
        if (currentGymId < AppConfig.settings.maxLevel) {
            this._gameState.gyms[currentGymId + 1].unlocked = true;
        }
        
        // Actualizar UI
        this.updateGymUI(currentGymId);
        UIManager.updateGameUI(this._gameState);
        
        this.saveGameState();
        
        // Verificar si completó todos los gimnasios
        if (this._gameState.gymsCleared >= AppConfig.settings.maxLevel) {
            setTimeout(() => {
                this.showChampionHall();
            }, 2000);
        } else {
            setTimeout(() => {
                this.returnToMap();
            }, 2000);
        }
    },

    /**
     * Actualiza la UI del gimnasio completado
     * @param {number} gymId - ID del gimnasio
     */
    updateGymUI(gymId) {
        const levelNode = document.getElementById(`level${gymId}`);
        levelNode.classList.add('completed');
        
        if (gymId < AppConfig.settings.maxLevel) {
            const nextLevelNode = document.getElementById(`level${gymId + 1}`);
            nextLevelNode.classList.remove('locked');
        }
        
        const badge = document.getElementById(`badge${gymId}`);
        badge.classList.remove('locked');
        badge.classList.add('earned');
    },

    /**
     * Regresa al mapa principal
     */
    returnToMap() {
        console.log("🗺️ Volviendo al mapa");
        
        UIManager.transitionScreen('battleScreen', 'mainScreen');
        
        // Limpiar estados de las tarjetas
        const moveCards = document.querySelectorAll('.move-card');
        moveCards.forEach(card => {
            card.style.pointerEvents = 'auto';
            card.classList.remove('selected', 'correct', 'incorrect');
        });
        
        this._gameState.currentGym = null;
        this.saveGameState();
    },

    /**
     * Muestra la pantalla de campeón
     */
    showChampionHall() {
        console.log("👑 ¡Mostrando pantalla de campeón!");
        
        UIManager.elements.battleScreen.classList.remove('active');
        UIManager.elements.mainScreen.classList.remove('active');
        
        const championHall = UIManager.elements.championHall;
        championHall.classList.add('show');
        
        // Actualizar estadísticas finales
        document.getElementById('finalLevel').textContent = this._gameState.level;
        document.getElementById('finalXP').textContent = this._gameState.xp;
        document.getElementById('finalBadges').textContent = `${this._gameState.badges}/5`;
    },

    /**
     * Reinicia el juego
     */
    restartGame() {
        console.log("🔄 Reiniciando juego");
        
        // Resetear estado del juego
        this.clearGameData();
        
        // Limpiar UI
        for (let i = 1; i <= AppConfig.settings.maxLevel; i++) {
            const levelNode = document.getElementById(`level${i}`);
            const badge = document.getElementById(`badge${i}`);
            
            levelNode.classList.remove('completed');
            badge.classList.remove('earned');
            badge.classList.add('locked');
            
            if (i > 1) {
                levelNode.classList.add('locked');
            }
        }
        
        // Mostrar pantalla de introducción
        UIManager.elements.championHall.classList.remove('show');
        UIManager.elements.introScreen.style.display = 'flex';
        UIManager.elements.introScreen.classList.remove('hidden');
        
        UIManager.updateGameUI(this._gameState);
    },

    /**
     * Obtiene los resultados del juego (solo lectura)
     * @returns {Array} Copia de los resultados
     */
    getGameResults() {
        return [...this._gameResults]; // Retorna copia para evitar mutaciones
    },

    /**
     * Obtiene el estado actual del juego (solo lectura)
     * @returns {Object} Copia del estado del juego
     */
    getGameState() {
        return { ...this._gameState }; // Retorna copia para evitar mutaciones
    }
};

// ===== MANAGER DE REPORTES =====

/**
 * ReportManager: Maneja la generación y exportación de reportes
 * Mejorado para generar archivos en formato de texto con tabulaciones
 */
const ReportManager = {
    /**
     * Actualiza las estadísticas mostradas en el panel
     */
    updateStats() {
        // En un sistema real, estos datos vendrían de una base de datos
        // Por ahora simulamos con datos estáticos
        UIManager.elements.totalUsers.textContent = '45';
        UIManager.elements.totalSessions.textContent = '128';
        UIManager.elements.avgScore.textContent = '78%';
        UIManager.elements.completionRate.textContent = '85%';
    },

    /**
     * Exporta los datos del juego actual a un archivo de texto
     * Mejorado: formato de texto con tabulaciones para mejor compatibilidad con Excel
     */
    exportData() {
        const gameResults = GameManager.getGameResults();
        
        if (gameResults.length === 0) {
            alert('⚠️ No hay datos de juego para exportar. Los asesores deben completar al menos una pregunta.');
            return;
        }

        console.log("📊 Iniciando exportación mejorada...");

        try {
            // Calcular estadísticas del usuario
            const totalQuestions = gameResults.length;
            const correctAnswers = gameResults.filter(r => r.result === 'Correcto').length;
            const totalScore = gameResults.reduce((sum, r) => sum + r.score, 0);
            const finalLevel = Math.floor(totalScore / AppConfig.settings.xpPerLevel) + 1;
            const accuracyPercentage = Math.round((correctAnswers / totalQuestions) * 100);

            // Generar contenido del archivo con formato de texto tabulado
            let content = this.generateReportHeader();
            content += this.generateReportData(gameResults);
            content += this.generateReportSummary({
                dni: gameResults[0].dni,
                totalQuestions,
                correctAnswers,
                totalScore,
                finalLevel,
                accuracyPercentage
            });

            // Descargar archivo
            const fileName = `Reporte_Liga_Claro_${gameResults[0].dni}_${new Date().toISOString().split('T')[0]}.txt`;
            this.downloadFile(content, fileName);

            console.log("✅ Exportación completada exitosamente");
            alert('📊 ¡Reporte exportado exitosamente! El archivo se ha descargado y puede importarse fácilmente en Excel.');

        } catch (error) {
            console.error("❌ Error en exportación:", error);
            alert('❌ Error al exportar el reporte. Por favor, intente nuevamente.');
        }
    },

    /**
     * Genera el encabezado del reporte
     * @returns {string} Encabezado formateado
     */
    generateReportHeader() {
        const currentDate = new Date().toLocaleString('es-PE');
        const currentUser = AuthManager.getCurrentUser();
        
        let header = `REPORTE DE CAPACITACIÓN - LIGA CLARO PERÚ\n`;
        header += `SISTEMA MAESTRO DE PORTABILIDAD\n`;
        header += `${'='.repeat(60)}\n`;
        header += `Fecha de Generación:\t${currentDate}\n`;
        header += `Formador:\t${currentUser.name}\n`;
        header += `${'='.repeat(60)}\n\n`;
        
        // Encabezados de columnas con tabulaciones
        header += `Número\tDNI/CE Asesor\tGimnasio\tPregunta\tRespuesta del Asesor\tRespuesta Correcta\tResultado\tPuntaje\tFecha y Hora\n`;
        header += `${'='.repeat(120)}\n`;
        
        return header;
    },

    /**
     * Genera los datos del reporte
     * @param {Array} gameResults - Resultados del juego
     * @returns {string} Datos formateados
     */
    generateReportData(gameResults) {
        let data = '';
        
        gameResults.forEach((result, index) => {
            // Limpiar texto para evitar problemas de formato
            const question = this.cleanText(result.question);
            const userAnswer = this.cleanText(result.userAnswer);
            const correctAnswer = this.cleanText(result.correctAnswerText);
            const gym = this.cleanText(result.gym);
            const dateTime = new Date(result.timestamp).toLocaleString('es-PE');
            
            data += `${index + 1}\t${result.dni}\t${gym}\t${question}\t${userAnswer}\t${correctAnswer}\t${result.result}\t${result.score}\t${dateTime}\n`;
        });
        
        return data;
    },

    /**
     * Genera el resumen del reporte
     * @param {Object} summary - Datos del resumen
     * @returns {string} Resumen formateado
     */
    generateReportSummary(summary) {
        let summaryText = '\n';
        summaryText += `${'='.repeat(60)}\n`;
        summaryText += `RESUMEN DE RENDIMIENTO\n`;
        summaryText += `${'='.repeat(60)}\n`;
        summaryText += `DNI/CE del Asesor:\t${summary.dni}\n`;
        summaryText += `Total de Preguntas Respondidas:\t${summary.totalQuestions}\n`;
        summaryText += `Respuestas Correctas:\t${summary.correctAnswers}\n`;
        summaryText += `Porcentaje de Acierto:\t${summary.accuracyPercentage}%\n`;
        summaryText += `Puntaje Total (XP):\t${summary.totalScore}\n`;
        summaryText += `Nivel Final Alcanzado:\t${summary.finalLevel}\n`;
        summaryText += `Estado de Certificación:\t${summary.finalLevel >= 5 ? 'CERTIFICADO COMPLETO' : 'EN PROGRESO'}\n`;
        summaryText += `${'='.repeat(60)}\n`;
        summaryText += `Reporte generado por: Liga Claro Perú - Sistema de Capacitación\n`;
        
        return summaryText;
    },

    /**
     * Limpia el texto para evitar problemas de formato
     * @param {string} text - Texto a limpiar
     * @returns {string} Texto limpiado
     */
    cleanText(text) {
        return text.replace(/\t/g, ' ').replace(/\n/g, ' ').replace(/\r/g, ' ');
    },

    /**
     * Descarga un archivo de texto
     * @param {string} content - Contenido del archivo
     * @param {string} fileName - Nombre del archivo
     */
    downloadFile(content, fileName) {
        // Usar BOM UTF-8 para compatibilidad con Excel
        const BOM = '\uFEFF';
        const blob = new Blob([BOM + content], { 
            type: 'text/plain;charset=utf-8' 
        });
        
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        
        link.setAttribute('href', url);
        link.setAttribute('download', fileName);
        link.style.visibility = 'hidden';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        URL.revokeObjectURL(url);
    }
};

// ===== APLICACIÓN PRINCIPAL =====

/**
 * App: Orquestador principal de la aplicación
 * Inicializa todos los managers y coordina la aplicación
 */
const App = {
    /**
     * Inicializa la aplicación completa
     */
    init() {
        console.log("🚀 Iniciando Liga Claro Perú - Maestro de Portabilidad");
        console.log("📋 Versión: Refactorizada con arquitectura modular");
        
        try {
            // Inicializar managers en orden de dependencia
            AuthManager.init();
            UIManager.init();
            GameManager.init();
            
            // Configurar estado inicial de UI
            this.setupInitialUI();
            
            console.log("✅ Aplicación inicializada correctamente");
            console.log("🎯 Sistema listo para usar");
            
        } catch (error) {
            console.error("❌ Error crítico inicializando aplicación:", error);
            alert('Error crítico al inicializar la aplicación. Por favor, recargue la página.');
        }
    },

    /**
     * Configura el estado inicial de la UI
     */
    setupInitialUI() {
        // Ocultar todas las pantallas excepto login
        UIManager.hideAllScreens();
        
        // Verificar si hay un usuario logueado
        if (AuthManager.isLoggedIn()) {
            const currentUser = AuthManager.getCurrentUser();
            console.log(`👤 Usuario encontrado en sesión: ${currentUser.name}`);
            
            // Redirigir según tipo de usuario
            if (currentUser.userType === 'formador') {
                UIManager.showReportScreen();
            } else {
                UIManager.showGameScreen();
            }
        } else {
            // Mostrar pantalla de login
            UIManager.showLoginScreen();
        }
    }
};

// ===== FUNCIONES GLOBALES PARA COMPATIBILIDAD =====
// Estas funciones mantienen la compatibilidad con los eventos onclick en el HTML

/**
 * Funciones globales para mantener compatibilidad con eventos HTML
 * Se mantienen para no romper los onclick existentes
 */
window.GameManager = {
    startLevel: (levelId) => GameManager.startLevel(levelId),
    nextQuestion: () => GameManager.nextQuestion(),
    returnToMap: () => GameManager.returnToMap(),
    restartGame: () => GameManager.restartGame()
};

// ===== INICIALIZACIÓN =====

/**
 * Inicialización automática cuando el DOM está listo
 * Punto de entrada principal de la aplicación
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log("📄 DOM cargado, inicializando aplicación...");
    App.init();
});

// ===== EXPORTACIÓN PARA TESTING (Opcional) =====

/**
 * Exportar objetos principales para testing o debugging
 * Solo disponible en modo desarrollo
 */
if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    window.AppDebug = {
        AuthManager,
        UIManager,
        GameManager,
        ReportManager,
        StorageManager,
        AppConfig
    };
    console.log("🔧 Modo debug habilitado - AppDebug disponible en window");
}