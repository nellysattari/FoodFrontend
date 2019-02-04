import Vue from "vue";
import VueRouter from "vue-router";
import {TitleComponent} from  'tool-vue-lib';
import {StepComponent} from  'tool-vue-lib';
import {Ques1Component} from  'tool-vue-lib';
import {Ques2Component} from  'tool-vue-lib';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      components: {
         title: TitleComponent
     },
      props: {
        title: () => ({ msg: "life time  tool" }) 
      }
    },
    {
      path: "/step1",
      components: {
        title: TitleComponent,
        steps: StepComponent,
        main: Ques1Component
      },
      props: {
        title: () => ({ msg: "life time  tool" }),
        steps: () => ({
          stepNumber: "Step 1",
          stepTitle: "Tell us a little about yourself"
        }),
        main: () => ({
          questions: [
            {
              title:
                "How important is/will be the government Age Pension to your standard of living in retiremen?"
            },
            {
              title:
                "Do you have a partner, or any children or family that you feel responsible to provide for or would like to leave an inheritance to"
            }
          ]
        })
      }
    },
    {
      path: "/step2",
      components: {
        title: TitleComponent,
        steps: StepComponent,
        main: Ques2Component
      },
      props: {
        title: () => ({ msg: "life time tool" }),
        steps: () => ({
          stepNumber: "Step 2",
          stepTitle: "Payment illustrator"
        }),
        main: () => ({
          questions: [
            {
              title: "Gender"
            },
            {
              title: "Age (Not DOB)"
            }
          ]
        })
      }
    }
  ]
});

export default router;