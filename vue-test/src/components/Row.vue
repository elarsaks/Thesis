<template>
  <div>
    <tr>
      <td class="small-col" >{{rowId}}</td>
      <td class="big-col" >{{rowLabel}}</td>
    </tr>
  </div>
</template>

<script>
export default  {
  props: ['rowId', 'rowLabel'],
}
</script>
