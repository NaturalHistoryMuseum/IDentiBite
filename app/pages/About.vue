<template>
  <Page class="page">
    <Header page-title="About" />
    <ScrollView>
      <StackLayout>
        <Label
          class="body"
          textWrap="true"
          text="IDentiBite is an app designed to help members of the public and healthcare professionals identify commonly encountered arthropods that bite and sting people in the UK and contains general medical information regarding common bites and stings suffered in the UK. The app has been designed to be a source of information but is not intended as a substitute for professional medical advice, first aid training and/or techniques. To seek medical attention please dial 999 immediately or visit your nearest health care provider. "
        />
        <Label class="h2" textWrap="true" text="How to use it?" />
        <Label
          class="body"
          textWrap="true"
          text="The app can be used in three main ways. The first link on the homepage leads you to a number of questions that can be answered regarding the offending arthropod, questions about the bite or sting itself, when the bite and sting happened and where it happened. As questions are completed the number of likely arthropods that may have been involved will reduce and shown on the screen. The more questions that are answered the more likely the app will help identify the culprit. As many or as few questions can be answered as is desired. Likely arthropods can be clicked on at any time during this process to access information about the arthropod and its bite or sting."
        />
        <Label
          class="body"
          textWrap="true"
          text="The second link leads to an alphabetical list of arthropods that can be clicked on to access information regarding the arthropod and its bite or sting."
        />
        <Label
          class="body"
          textWrap="true"
          text="The third link leads to common medical treatments as listed by the NHS and NICE regarding bites and stings in the UK."
        />
        <Label
          class="body"
          textWrap="true"
          text="At any point you can return to the homepage by clicking the link in the corner of the screen."
        />
        <Label class="h2" textWrap="true" text="Who can use the app?" />
        <Label
          class="body"
          textWrap="true"
          text="We hope everyone will find the app informative, as it does not require specialist entomology knowledge to use. It also does not matter if you are a medical professional or a member of the public this app is for anyone with an interest in UK arthropods and their bites and stings."
        />
        <Label class="h2" textWrap="true" text="App Development" />
        <Label
          class="body"
          textWrap="true"
          text="Dr Alex Kew, Dr Vince Smith, Ben Scott and the Natural History Museum, London, have developed this application. For any suggestions, feedback or enquiries please contact the Natural History Museum, London. www.nhm.ac.uk"
        />
        <Label
          class="h2"
          textWrap="true"
          text="Medical information disclaimer"
        />

        <Label
          class="m-b-10 m-t-10 m-l-10 font-weight-bold"
          textWrap="true"
          text="1. Credit"
        />
        <Label
          class="m-l-20 m-b-10"
          textWrap="true"
          text="1.1 This document was created using a template from SEQ Legal (https://seqlegal.com)."
        />
        <Label
          class="m-b-10 m-l-10 font-weight-bold"
          textWrap="true"
          text="2. No advice"
        />
        <Label
          class="m-l-20 m-b-10"
          textWrap="true"
          text="2.1 Our application contains general medical information."
        />
        <Label
          class="m-l-20 m-b-10"
          textWrap="true"
          text="2.2 The medical information is not advice and should not be treated as such."
        />
        <Label
          class="m-b-10 m-l-10 font-weight-bold"
          textWrap="true"
          text="3. No warranties"
        />
        <Label
          class="m-l-20 m-b-10"
          textWrap="true"
          text="3.1 The medical information on our application is provided without any representations or warranties, express or implied."
        />
        <Label
          class="m-l-20 m-b-10"
          textWrap="true"
          text="3.2 Without limiting the scope of Section 3.1, we do not warrant or represent that the medical information on this website:"
        />
        <Label
          class="m-l-30 m-b-10"
          textWrap="true"
          text="(a) will be constantly available, or available at all; or"
        />
        <Label
          class="m-l-30 m-b-10"
          textWrap="true"
          text="(b) is true, accurate, complete, current or non-misleading."
        />
        <Label
          class="m-b-10 m-l-10 font-weight-bold"
          textWrap="true"
          text="4. Medical assistance"
        />
        <Label
          class="m-l-20 m-b-10"
          textWrap="true"
          text="4.1 You must not rely on the information on our application as an alternative to medical advice from your doctor or other professional healthcare provider."
        />
        <Label
          class="m-l-20 m-b-10"
          textWrap="true"
          text="4.2 If you have any specific questions about any medical matter, you should consult your doctor or other professional healthcare provider."
        />
        <Label
          class="m-l-20 m-b-10"
          textWrap="true"
          text="4.3 If you think you may be suffering from any medical condition, you should seek immediate medical attention."
        />
        <Label
          class="m-l-20 m-b-10"
          textWrap="true"
          text="4.4 You should never delay seeking medical advice, disregard medical advice or discontinue medical treatment because of information on our website. "
        />
        <Label
          class="m-b-10 m-l-10 font-weight-bold"
          textWrap="true"
          text="5. Interactive features"
        />
        <Label
          class="m-l-20 m-b-10"
          textWrap="true"
          text="5.1 Our application does not include interactive features that allow users to communicate with us."
        />
        <Label
          class="m-b-10 m-l-10 font-weight-bold"
          textWrap="true"
          text="6. Limits upon exclusions of liability"
        />
        <Label
          class="m-l-20 m-b-10"
          textWrap="true"
          text="6.1 Nothing in this disclaimer will:"
        />
        <Label
          class="m-l-30 m-b-10"
          textWrap="true"
          text="(a) limit or exclude any liability for death or personal injury resulting from negligence;"
        />
        <Label
          class="m-l-30 m-b-10"
          textWrap="true"
          text="(b) limit or exclude any liability for fraud or fraudulent misrepresentation;"
        />
        <Label
          class="m-l-30 m-b-10"
          textWrap="true"
          text="(c) limit any liabilities in any way that is not permitted under applicable law; or"
        />
        <Label
          class="m-l-30 m-b-10"
          textWrap="true"
          text="(d) exclude any liabilities that may not be excluded under applicable law."
        />
      </StackLayout>
    </ScrollView>
  </Page>
</template>


<script>
import ListItem from "../components/ListItem";

export default {
  mounted() {
    this.$updateSelectedPage("about");
  }
};
</script>

