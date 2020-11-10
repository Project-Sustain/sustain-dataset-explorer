<template>
  <div>
    <div class="col">
      <div class="row form-control-static">
        <label for="censusResolution" class="">Resolution </label>
        <select class="form-control" id="censusResolution">
          <option value="county">County</option>
          <option value="tract">Tract</option>
        </select>
      </div>
      <br/>
      <!-- Below Poverty -->
      <div class="row form-control-static">
        <div class="col-8">
          <label for="belowPoverty">Below Poverty</label>
        </div>
        <div class="col-4">
          <input type="number" class="form-control form-inline" id="belowPoverty" value="1">
        </div>
      </div>
    </div>
    <!-- Unemployed -->
    <div class="row form-control-static">
      <div class="col-8">
        <label for="unemployed">Unemployed</label>
      </div>
      <div class="col-4">
        <input type="number" class="form-control form-inline" id="unemployed" value="1">
      </div>
    </div>
    <!-- Income -->
    <div class="row form-control-static">
      <div class="col-8">
        <label for="income">Income</label>
      </div>
      <div class="col-4">
        <input type="number" class="form-control form-inline" id="income" value="1">
      </div>
    </div>
    <!-- No High School Diploma -->
    <div class="row form-control-static">
      <div class="col-8">
        <label for="noHighSchoolDiploma">No High School Diploma</label>
      </div>
      <div class="col-4">
        <input type="number" class="form-control form-inline" id="noHighSchoolDiploma" value="1">
      </div>
    </div>
    <!-- Aged 65 or older -->
    <div class="row form-control-static">
      <div class="col-8">
        <label for="aged65OrOlder">Aged 65 or Older</label>
      </div>
      <div class="col-4">
        <input type="number" class="form-control form-inline" id="aged65OrOlder" value="1">
      </div>
    </div>
    <!-- Aged 17 or Younger -->
    <div class="row form-control-static">
      <div class="col-8">
        <label for="aged17OrYounger">Aged 17 or Younger</label>
      </div>
      <div class="col-4">
        <input type="number" class="form-control form-inline" id="aged17OrYounger" value="1">
      </div>
    </div>
    <!-- Older than Age 5 with a Disability -->
    <div class="row form-control-static">
      <div class="col-8">
        <label for="age5OrOlderWithDisability">Older than Age 5 with a Disability</label>
      </div>
      <div class="col-4">
        <input type="number" class="form-control form-inline" id="age5OrOlderWithDisability" value="1">
      </div>
    </div>
    <!-- Single-Parent Households -->
    <div class="row form-control-static">
      <div class="col-8">
        <label for="singleParentHouseholds">Single Parent Households</label>
      </div>
      <div class="col-4">
        <input type="number" class="form-control form-inline" id="singleParentHouseholds" value="1">
      </div>
    </div>
    <!-- Minority -->
    <div class="row form-control-static">
      <div class="col-8">
        <label for="minority">Minority</label>
      </div>
      <div class="col-4">
        <input type="number" class="form-control form-inline" id="minority" value="1">
      </div>
    </div>
    <!-- Speaks English "Less than Well" -->
    <div class="row form-control-static">
      <div class="col-8">
        <label for="speaksEnglishLessThanWell">Speaks English "Less than Well"</label>
      </div>
      <div class="col-4">
        <input type="number" class="form-control form-inline" id="speaksEnglishLessThanWell" value="1">
      </div>
    </div>
    <!-- Multi-Unit Structures -->
    <div class="row form-control-static">
      <div class="col-8">
        <label for="multiUnitStructures">Multi-Unit Structures</label>
      </div>
      <div class="col-4">
        <input type="number" class="form-control form-inline" id="multiUnitStructures" value="1">
      </div>
    </div>
    <!-- Mobile Homes -->
    <div class="row form-control-static">
      <div class="col-8">
        <label for="mobileHomes">Mobile Homes</label>
      </div>
      <div class="col-4">
        <input type="number" class="form-control form-inline" id="mobileHomes" value="1">
      </div>
    </div>
    <!-- Crowding -->
    <div class="row form-control-static">
      <div class="col-8">
        <label for="crowding">Crowding</label>
      </div>
      <div class="col-4">
        <input type="number" class="form-control form-inline" id="crowding" value="1">
      </div>
    </div>
    <!-- No Vehicle -->
    <div class="row form-control-static">
      <div class="col-8">
        <label for="noVehicle">No Vehicle</label>
      </div>
      <div class="col-4">
        <input type="number" class="form-control form-inline" id="noVehicle" value="1">
      </div>
    </div>
    <!-- Group Quarters -->
    <div class="row form-control-static">
      <div class="col-8">
        <label for="groupQuarters">Group Quarters</label>
      </div>
      <div class="col-4">
        <input type="number" class="form-control form-inline" id="groupQuarters" value="1">
      </div>
    </div>

  </div>
</template>

<script>
// import sviModel from "@/components/queryConstructors/models/sviModel.json"
// import sviSchema from "@/components/queryConstructors/schemas/sviSchema.json"

export default {
  name: 'SviQueryConstructor',
  data() {
    return {}
  }
}
</script>

