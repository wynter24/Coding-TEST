function solution(bridge_length, weight, truck_weights) {
  let bridge = [];
  let curTime = 0;
  let totalWeight = 0;

  while(truck_weights.length > 0 || bridge.length > 0) {
    curTime++;
    
    if(bridge.length > 0 && bridge[0].time === bridge_length) {
      totalWeight -= bridge[0].weight;
      bridge.shift();
    }

    if(truck_weights.length > 0 && totalWeight + truck_weights[0] <= weight) {
      let newTruckWeight = truck_weights.shift();
      bridge.push({weight: newTruckWeight, time:0});
      totalWeight += newTruckWeight;
    }

    for (let i = 0; i < bridge.length; i++) {
      bridge[i].time++;
    }

  }

  return curTime;
}