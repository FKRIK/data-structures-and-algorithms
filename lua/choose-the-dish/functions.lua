local functions = {}
Dishes = {'Pizza', 'Burguer', 'Ramen', 'Paella', 'Pierogui', 'Moussaka'}

function functions.AppRun()
    A = ShowInitialMenu()
    VerifyChoice(A)
end

function ShowInitialMenu()
    local title = 'Welcome to home!'
    local question = 'What you wish to do? '
    print(title)
    print(ShowOptions())
    return tonumber(ReadInput(question))
end

function ReadInput(text)
    io.write(text)
    local chosenOption = io.read()
    return chosenOption
end

function ShowOptions()
    return [[
    1 - View menu;
    2 - Register a dish;
    0 - Exit;
    ]]
end

function VerifyChoice(chosenOpt)
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
    local newDish = ReadInput('Type it here: ')
    table.insert(Dishes, newDish)
    PrintDishes()
end

function InvalidOption()
    print('Opção inválida. Esolha novamente!')
    local value = ShowInitialMenu()
    VerifyChoice(value)
end

function PrintDishes()
    for _, dishName in ipairs(Dishes) do print(_ .. '. ' .. dishName) end
end

function AskGoBack()
    local answer = ReadInput('Want to go back to the menu? [y/n]')
    local decision = {
        ['y'] = function() ShowInitialMenu() end,
        ['n'] = function() os.exit() end,
        default = function() end
    }

    if decision[answer] then
        decision[answer]()
    else
        decision['default']()
    end
end

return functions
