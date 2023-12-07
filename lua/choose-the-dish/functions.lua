local functions = {}
Dishes = { 'Pizza', 'Burguer', 'Ramen', 'Paella', 'Pierogui', 'Moussaka' }

function functions.AppRun()
    A = functions.ShowInitialMenu()
    functions.VerifyChoice(A)
end

function functions.ShowInitialMenu()
    local title = 'Welcome to home!'
    local question = 'What you wish to do? '
    print(title)
    print(functions.ShowOptions())
    return functions.ReadInput(question)
end

function functions.ReadInput(text)
    io.write(text)
    local chosenOption = tonumber(io.read())
    return chosenOption
end

function functions.ShowOptions()
    return [[
    1 - View menu;
    2 - Register a dish;
    0 - Exit;
    ]]
end

function functions.VerifyChoice(chosenOpt)
    local choice = {
        [1] = function() Option01() end,
        [2] = function() Option02() end,
        [0] = function() os.exit() end,
        default = function() InvalidOption() end
    }

    if choice[chosenOpt] then
        choice[chosenOpt]()
    else
        choice['default']()
    end
end

function Option01()
    PrintDishes()
end

function Option02()
    io.write('Type it here: ')
    local newDish = io.read()
    table.insert(Dishes, newDish)
    PrintDishes()
end

function InvalidOption()
    print('Opção inválida. Esolha novamente!')
    local value = functions.ShowInitialMenu()
    functions.VerifyChoice(value)
end

function PrintDishes()
    for _, dishName in ipairs(Dishes) do
        print(_ .. '. ' .. dishName)
    end
end

return functions
