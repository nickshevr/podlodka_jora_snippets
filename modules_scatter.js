const c = {
    view: 'chart',
    data: `{
        type: 'scatter',
        data: {
            datasets: [
                {
                    label: 'Modules size',
                    data: #.stats.compilations[0].modules.group(=> size, => 
modules).({x: key, y: value.size()}).slice(0, 1000),
                    backgroundColor: 'rgb(255, 99, 132)'
                }
            ]
        },
        options: {
            plugins: {
                title: {
                    display: true
                }
            },
                scales: {
        x: {
            type: 'linear',
            position: 'bottom'
        }
    }
        }
    }`
};
