// IMPORTS
import { services } from '../components/services/services.js';
import { servicesData } from '../data/servicesData.js';
import { ProgressBar } from '../components/progress-bar/ProgressBar.js';
import { progressBarData } from '../data/progressBarData.js';

// CODE EXECUTION BELOW THIS COMMENT LINE

/* header start */
/* header end */

/* hero start */
/* hero end */

/* top logos start */
/* top logos end */

/* about cards start */
/* about cards end */

/* about progress-bars start */
const p = new ProgressBar('#progress_bar_block > p', progressBarData);
console.log(p);
/* about progress-bars end */

/* services start */
const [serviceErr, serviceMsg] = services('#services_block', servicesData);

if (serviceErr) {
    console.error(serviceMsg);
} else {
    console.log(serviceMsg);
}
/* services end */

/* why choose us start */
/* why choose us end */

/* contact start */
/* contact end */

/* blog start */
/* blog end */

/* testimonials start */
/* testimonials end */

/* bottom logos start */
/* bottom logos end */

/* footer start */
/* footer end */
