import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';


const CoinSearch = ({coins}) => {

  return (
    <div>
        <div>
            <h1> Search Crypto</h1>
            <form> 
                <input type="text" placeholder='Search a coin' />
            </form>
        </div>
        <table>
            <thead> 
                <tr>
                    <th> </th>
                    <th> # </th>
                    <th> Coin </th>
                    <th> </th>
                    <th> Price </th>
                    <th> 24th </th>
                    <th> 24th Volume </th>
                    <th> Mkt </th>
                    <th> Last 7 Days </th>
                
                </tr>
            </thead>
            <tbody>
                {coins.map((coin) => (
                    <tr> 
                        <td> <AiOutlineStar /> </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                ))}
            </tbody>

        </table>
    </div>
  )
}

export default CoinSearch