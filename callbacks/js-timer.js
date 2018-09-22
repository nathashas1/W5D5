class Clock {
  constructor() {
    // 1. Create a Date object.
    this.d = new Date();
    // 2. Store the hours, minutes, and seconds.
    
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.  
    
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    function pad(t) {
      let st = "" + t;
    
      while (st.length < 2)
        st = "0" + st;
      
      return st;  
    }
    let time = this.d.getHours() + ":" + pad(this.d.getMinutes()) + ":" + pad(this.d.getSeconds());
  console.log(time);
  }
  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.d.setSeconds(this.d.getSeconds() + 1);
    this.printTime();
    // let seconds = this.d.getSeconds() + 1;
    // this.d = this.d + seconds;
  }
}

const clock = new Clock();