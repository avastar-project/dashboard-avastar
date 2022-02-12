import JsonData from '../fake-data/facebook-data-fake/location/primary_location.json'
import 'rxjs/add/operator/map'

 function JsonDataDisplay(){
    const DisplayData=JsonData(map(
        (info)=>{
            return(
                <tr>
                    <td>{info.id}</td>
                    <td>{info.name}</td>
                    <td>{info.city}</td>
                </tr>
            )
        }
    )

    return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>Sr.NO</th>
                    <th>Name</th>
                    <th>City</th>
                    </tr>
                </thead>
                <tbody>


                    {DisplayData}

                </tbody>
            </table>

        </div>
    )
 }

 export default JsonDataDisplay;
