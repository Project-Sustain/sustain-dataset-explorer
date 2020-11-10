<template>
  <div>
    <div class="col">
      <div class="row form-control-static">
        <label for="censusResolution" class="">Resolution </label>
        <select class="form-control" id="censusResolution">
          <!--          <option value="county">County</option>-->
          <option value="tract">Tract</option>
        </select>
      </div>
      <br/>
      <!-- Below Poverty -->
      <div class="row form-control-static">
        <div class="col-8">
          <label><h5><b>Variable</b></h5></label>
        </div>
        <div class="col-4">
          <label><h5><b>Weight</b></h5></label>
        </div>
      </div>
      <!-- Below Poverty -->
      <div class="row form-control-static">
        <div class="col-8">
          <label for="belowPoverty">Below Poverty</label>
        </div>
        <div class="col-4">
          <input type="number" min=1 class="form-control form-inline" id="belowPoverty" value="1" v-model="belowPoverty"
                 v-on:change="valuesUpdated">
        </div>
      </div>
      <!-- Unemployed -->
      <div class="row form-control-static">
        <div class="col-8">
          <label for="unemployed">Unemployed</label>
        </div>
        <div class="col-4">
          <input type="number" min=1 class="form-control form-inline" id="unemployed" value="1" v-model="unemployed"
                 v-on:change="valuesUpdated">
        </div>
      </div>
      <!-- Income -->
      <div class="row form-control-static">
        <div class="col-8">
          <label for="income">Income</label>
        </div>
        <div class="col-4">
          <input type="number" min=1 class="form-control form-inline" id="income" value="1" v-model="income"
                 v-on:change="valuesUpdated">
        </div>
      </div>
      <!-- No High School Diploma -->
      <div class="row form-control-static">
        <div class="col-8">
          <label for="noHighSchoolDiploma">No High School Diploma</label>
        </div>
        <div class="col-4">
          <input type="number" min=1 class="form-control form-inline" id="noHighSchoolDiploma" value="1"
                 v-model="noHighSchoolDiploma" v-on:change="valuesUpdated">
        </div>
      </div>
      <!-- Aged 65 or older -->
      <div class="row form-control-static">
        <div class="col-8">
          <label for="aged65OrOlder">Aged 65 or Older</label>
        </div>
        <div class="col-4">
          <input type="number" min=1 class="form-control form-inline" id="aged65OrOlder" value="1"
                 v-model="aged65OrOlder"
                 v-on:change="valuesUpdated">
        </div>
      </div>
      <!-- Aged 17 or Younger -->
      <div class="row form-control-static">
        <div class="col-8">
          <label for="aged17OrYounger">Aged 17 or Younger</label>
        </div>
        <div class="col-4">
          <input type="number" min=1 class="form-control form-inline" id="aged17OrYounger" value="1"
                 v-model="aged17OrYounger"
                 v-on:change="valuesUpdated">
        </div>
      </div>
      <!-- Older than Age 5 with a Disability -->
      <div class="row form-control-static">
        <div class="col-8">
          <label for="age5orOlderWithDisability">Older than Age 5 with a Disability</label>
        </div>
        <div class="col-4">
          <input type="number" min=1 class="form-control form-inline" id="age5orOlderWithDisability" value="1"
                 v-model="age5orOlderWithDisability" v-on:change="valuesUpdated">
        </div>
      </div>
      <!-- Single-Parent Households -->
      <div class="row form-control-static">
        <div class="col-8">
          <label for="singleParentHouseholds">Single Parent Households</label>
        </div>
        <div class="col-4">
          <input type="number" min=1 class="form-control form-inline" id="singleParentHouseholds" value="1"
                 v-model="singleParentHouseholds" v-on:change="valuesUpdated">
        </div>
      </div>
      <!-- Minority -->
      <div class="row form-control-static">
        <div class="col-8">
          <label for="minority">Minority</label>
        </div>
        <div class="col-4">
          <input type="number" min=1 class="form-control form-inline" id="minority" value="1" v-model="minority"
                 v-on:change="valuesUpdated">
        </div>
      </div>
      <!-- Speaks English "Less than Well" -->
      <div class="row form-control-static">
        <div class="col-8">
          <label for="speaksEnglishLessThanWell">Speaks English "Less than Well"</label>
        </div>
        <div class="col-4">
          <input type="number" min=1 class="form-control form-inline" id="speaksEnglishLessThanWell" value="1"
                 v-model="speaksEnglishLessThanWell" v-on:change="valuesUpdated">
        </div>
      </div>
      <!-- Multi-Unit Structures -->
      <div class="row form-control-static">
        <div class="col-8">
          <label for="multiUnitStructures">Multi-Unit Structures</label>
        </div>
        <div class="col-4">
          <input type="number" min=1 class="form-control form-inline" id="multiUnitStructures" value="1"
                 v-model="multiUnitStructures" v-on:change="valuesUpdated">
        </div>
      </div>
      <!-- Mobile Homes -->
      <div class="row form-control-static">
        <div class="col-8">
          <label for="mobileHomes">Mobile Homes</label>
        </div>
        <div class="col-4">
          <input type="number" min=1 class="form-control form-inline" id="mobileHomes" value="1" v-model="mobileHomes"
                 v-on:change="valuesUpdated">
        </div>
      </div>
      <!-- Crowding -->
      <div class="row form-control-static">
        <div class="col-8">
          <label for="crowding">Crowding</label>
        </div>
        <div class="col-4">
          <input type="number" min=1 class="form-control form-inline" id="crowding" value="1" v-model="crowding"
                 v-on:change="valuesUpdated">
        </div>
      </div>
      <!-- No Vehicle -->
      <div class="row form-control-static">
        <div class="col-8">
          <label for="noVehicle">No Vehicle</label>
        </div>
        <div class="col-4">
          <input type="number" min=1 class="form-control form-inline" id="noVehicle" value="1" v-model="noVehicle"
                 v-on:change="valuesUpdated">
        </div>
      </div>
      <!-- Group Quarters -->
      <div class="row form-control-static">
        <div class="col-8">
          <label for="groupQuarters">Group Quarters</label>
        </div>
        <div class="col-4">
          <input type="number" min=1 class="form-control form-inline" id="groupQuarters" value="1"
                 v-model="groupQuarters"
                 v-on:change="valuesUpdated">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import sviModel from "@/components/queryConstructors/models/sviModel.json"
// import sviSchema from "@/components/queryConstructors/schemas/sviSchema.json"
import {mapActions} from 'vuex';

export default {
  name: 'SviQueryConstructor',
  data() {
    return {
      belowPoverty: 1,
      unemployed: 1,
      income: 1,
      noHighSchoolDiploma: 1,
      aged65OrOlder: 1,
      aged17OrYounger: 1,
      age5orOlderWithDisability: 1,
      singleParentHouseholds: 1,
      minority: 1,
      speaksEnglishLessThanWell: 1,
      multiUnitStructures: 1,
      mobileHomes: 1,
      crowding: 1,
      noVehicle: 1,
      groupQuarters: 1
    }
  },
  methods: {
    ...mapActions(['updateSviWeights']),
    valuesUpdated() {
      let sviWeights = {
        'EPL_POV': parseInt(this.belowPoverty),
        'EPL_UNEMP': parseInt(this.unemployed),
        'EPL_PCI': parseInt(this.income),
        'EPL_NOHSDP': parseInt(this.noHighSchoolDiploma),
        'EPL_AGE65': parseInt(this.aged65OrOlder),
        'EPL_AGE17': parseInt(this.aged17OrYounger),
        'EPL_DISABL': parseInt(this.age5orOlderWithDisability),
        'EPL_SNGPNT': parseInt(this.singleParentHouseholds),
        'EPL_MINRTY': parseInt(this.minority),
        'EPL_LIMENG': parseInt(this.speaksEnglishLessThanWell),
        'EPL_MUNIT': parseInt(this.multiUnitStructures),
        'EPL_MOBILE': parseInt(this.mobileHomes),
        'EPL_CROWD': parseInt(this.crowding),
        'EPL_NOVEH': parseInt(this.noVehicle),
        'EPL_GROUPQ': parseInt(this.groupQuarters)
      };
      this.updateSviWeights(sviWeights);
    }
  }
}
</script>

