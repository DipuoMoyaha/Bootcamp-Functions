document.addEventListener('alpine:init', () => {

    Alpine.data('transportFeeWidget', function () {
  
        return {
            shift: '',
            fare: '',
            transportFare() {
                const fareBalance = transportFee(this.shift)
                this.fare = fareBalance;
                setTimeout(() => {
                    this.fare = "";
                    this.shift="";
                }, 4000);
            }
        }
  
    });
  
  })