export default function whichCard(value) {
    if (/^4/.test(value)) {
      return '.card-visa';
    } if (/^5[1-5]/.test(value)) {
      return '.card-master';
    } if (/^3[47]/.test(value)) {
      return '.card-american';
    } if (/^2/.test(value)) {
      return '.card-mir';
    } 
    return null;
  }