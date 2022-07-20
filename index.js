const cht1 = document.getElementById('myChart').getContext('2d');
const cht2 = document.getElementById('myChart1').getContext('2d');


//1st Chart
const myChart = new Chart(cht1, {
    type: 'bar',
    data: {
        labels: ['Spam Rate', 'Usage', 'No. of Search'],
        datasets: [{
            label: '# URL Analysis',
            data: [1200, 1900, 300],
            backgroundColor: [
                'rgba(0, 0, 132)',
                'rgba(5, 2, 260)',
                'rgb(183, 226, 252)'
            ],
            // borderColor: [
            //     'rgba(255, 99, 132, 1)',
            //     'rgba(54, 162, 235, 1)',
            //     'rgba(255, 206, 86, 1)'
            // ],
            borderWidth: 0
        }]
    },
    options: {
       responsive:true,
    }
});


//2nd Chart
const myChart1 = new Chart(cht2, {
    type: 'polarArea',
    data: {
        labels: ['Spam Rate', 'Usage', 'No. of Search'],
        datasets: [{
            label: '# of Votes',
            data: [1200, 1900, 300],
            backgroundColor: [
                'rgba(0, 0, 132)',
                'rgba(5, 2, 260)',
                'rgb(183, 226, 252)'
            ],
            // borderColor: [
            //     'rgba(255, 99, 132)',
            //     'rgba(54, 162, 235)',
            //     'rgba(54, 162, 235)'
            // ],
            borderWidth: 0
        }]
    },
    options: {
        responsive:true,
     }

});

