<script lang="ts">
    export let inicio: Date;
    export let fin: Date;
    let actual = new Date();

    const recalcular = setInterval(function() {
        actual = new Date();
        if(actual > fin ) clearInterval(recalcular);
    }, 500);
</script>

<progress max={fin.getTime()-inicio.getTime()} value={actual.getTime()-inicio.getTime()}/>

