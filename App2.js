import React from 'react'

class App2 extends React.Component {
    render() {
        const text2 = 'text'

        const text3 = '<p>текст</p>'

        const text4 = <p>text1</p>
        const text5 = <p>text2</p>

        const attr = 'block'

        const css = {
			color: 'green',
			border: '1px solid red',
			borderRadius: '30px',
		}

        const show = true
        var text;
        if (show){
            text = 'text 1'
        }
        else {
            text = 'text 2'
        }

        const arr = ['a', 'b', 'c', 'd', 'e']
        const lies = arr.map(function(item, index) {
			return <li key={index}>{item}</li>;
		});

        function getText() {
            return <p>текст</p>
        }
        let getNum1 = () => 1;
        let getNum2 = () => 2;


        let arr1 = [
            {
              'firstName': 'Иван',
              'lastName': 'Иванов',
              'numWorkDay': 21,
              'moneyPerDay': 10000,
            },
            {
              'firstName': 'Иванов',
              'lastName': 'Иван',
              'numWorkDay': 12,
              'moneyPerDay': 1000,
            },
            {
              'firstName': 'Рузиля',
              'lastName': 'Салимова',
              'numWorkDay': 10,
              'moneyPerDay': 500,
            },
          ];
          let sum = 0;
          let elemsWorkers = arr1.map(function(val, index) {
            let sumWorker = val.numWorkDay*val.moneyPerDay;
            sum += sumWorker;
            return (
            <tr>
              <td>{val.firstName}</td>
              <td>{val.lastName}</td>
              <td>{val.numWorkDay}</td>
              <td>{val.moneyPerDay}</td>
              <td>{sumWorker}</td>
            </tr>
            )
          });

        return <div id={attr} className={attr} style={css}>
            <p>text</p>
            {text2}
            {text3}
            {text4}
            <p>!!!</p>
            {text5}
            {text}
            <ul>{lies}</ul>
            {getText()}
            <p>текст {getNum1()+getNum2()}</p>

            <table border="2px">
                <tr>
                    <td>Имя</td>
                    <td>Фамилия</td>
                    <td>Кол-во отр. дней</td>
                    <td>ЗП за день</td>
                    <td>ЗП</td>
                </tr>
                {elemsWorkers}
            </table>
            <p>{sum} заработная плата</p>
        </div>
    }
}

export default App2;
