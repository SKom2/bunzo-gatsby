const userAttentionMessages = {
    successUserUpdate: "Данные успешно обновлены",
    existingEmail: "Пользователь с таким Email уже существует!",
    invalidPasswordOrEmail: "Неправильный логин или пароль.",
    errorInUserUpdate: "При обновлении пользователя произошла ошибка!",
    errorInUserRegister: "При регистрации пользователя произошла ошибка!",
    errorInUserAuth: "При авторизации пользователя произошла ошибка!",
};

const moviesAttentionMessages = {
    nothingSearched: "Ничего не найдено",
    noOneSavedMovie: "У вас нет сохранённых фильмов",
};

const errorStatuses = {
    conflictError: "Error: Ошибка код 409",
    unauthorizedError: "Error: Ошибка код 401",
};

export { userAttentionMessages, errorStatuses, moviesAttentionMessages };
