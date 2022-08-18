// Поиск неработающего тришейкинга

/**
$hash: .compilations[0].hash;


compilations[0].modules.['lodash' in name].({name, usedExports, providedExports, hash: $hash}).[usedExports = true]
**/


// Вывод списка модулей с деоптимизациями в красивом виде с навигацией

/**
$compilation: .compilations[0];

$compilation.modules.[optimizationBailout.size() > 1].({module: $, hash: $compilation.hash})

Во view:
{
    view: 'list',
    item: 'module-item',
    data: `@`
}
**/

// Список модулей, в названии которых нет символа +, отсортированный по размеру

// .compilations[0].modules.['+' not in name].({size, name}).sort(=> size).reverse()
