<template>
  <div>
    <div class="card-item__accordion">
      <div class="accordion">
        <div class="accordion__inner">
          <no-ssr>
            <badger-accordion>
              <badger-accordion-item>
                <template slot="header"
                  ><div class="accortion__title">Описание</div></template
                >
                <template slot="content"
                  ><div v-html="accordion.DESC_PODAR"
                /></template>
              </badger-accordion-item>

              <badger-accordion-item>
                <template slot="header"
                  >Состав и габариты</template
                >
                <template slot="content"
                  ><div v-html="accordion.SOSTAV_PODAR"
                /></template>
              </badger-accordion-item>

              <badger-accordion-item>
                <template slot="header"
                  >Брендирование</template
                >
                <template slot="content"
                  ><div v-html="accordion.BRAND_PODAR"
                /></template>
              </badger-accordion-item>

              <badger-accordion-item>
                <template slot="header"
                  >Гарантии</template
                >
                <template slot="content"
                  ><div v-html="accordion.GARANT_PODAR"
                /></template>
              </badger-accordion-item>
            </badger-accordion>
          </no-ssr>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    accordion: {type: Object, required: true}
  }
  
}
</script>

<style>
.badger-accordion__panel {
  height: 100% !important;
}
.js-badger-accordion-header {
  padding: 15px;
  border-bottom: 1px solid #f0eae4;
}
.js-badger-accordion-panel-inner {
  padding: 15px;
  font-size: 16px;
  line-height: 1.75;
  color: #644733;
}
.js-badger-accordion-panel-inner ul {
  list-style: disk;
  padding-left: 20px;
}
.badger-toggle-indicator {
  display: none !important;
}
</style>
