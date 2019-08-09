
import * as jsonF from '../test/psychedelics.json';

function dynamicColors() {
  var r = Math.floor(Math.random() * 100);
  var g = Math.floor(Math.random() * 150);
  var b = Math.floor(Math.random() * 255);
  
  return "rgba(" + r + "," + g + "," + b + ", 0.5)";
}

export function getCollections (narrative) {
    return {
        type:'GET_COLLECTIONS',
        narrative,
    }
}

export function getNarratives () {
    return {
        type:'GET_NARRATIVES',
    }
}

export function changeNarrative (e) {
    const narrative = e.target.value
    
    return {
        type:'CHANGE_NARRATIVE',
        narrative
    }
}

export function detailed(param) {
    const json_data = jsonF.time;
    
    var item = {
        labels: [],
        datasets: [
        {
          label: 'Full Dataset',
          fill: false,
          lineTension: 0.3,
          borderColor: "rgb(0, 52, 98)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          borderWidth:2.5,
          pointBorderColor: "rgb(205, 130,1 58)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 3,
          pointHoverRadius: 2,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 3,
          data: []
        }
      ]
    }

    for (let i=0; i < Object.keys(json_data).length; i++) { 
        
      item.datasets[0].data.push(json_data[i].sizes)
      item.labels.push(json_data[i].periods)
      // item.text.push("P"+String(i)+' - '+json_data[i].periods)
    }
    
  return {
      type:'CHANGE_GRAFO',
      data:item,
      button:'attention'
  }
}

export function theme(param) {
    const json_data = jsonF.matches;
    var data = {
      datasets: [],
    }
    
    for (var key in json_data) {
      var item = {
            label: key,
            fill: false,
            lineTension: 0.3,
            borderColor: dynamicColors(),
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            borderWidth:2.5,
            pointBorderColor: "rgb(205, 130,1 58)",
            pointBackgroundColor: "rgb(255, 255, 255)",
            pointBorderWidth: 3,
            pointHoverRadius: 2,
            pointHoverBackgroundColor: "rgb(0, 0, 0)",
            pointHoverBorderColor: "rgba(220, 220, 220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 3,
            data: []
          }

      for (let k=0; k<json_data[key].periods.length;k++) {
        item.data.push({
          x:json_data[key].periods[k],
          y:json_data[key].sizes[k],
        })
      }
    data.datasets.push(item)
    }
        
    return {
        type:'CHANGE_GRAFO',
        data:data,
        button:'theme'
    }
  
}