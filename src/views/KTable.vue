<template>
    <h1>Table</h1>
    <k-table
        :head="tableHeads"
        :column-size="tableHeadSizes"
    >
        <k-table-row
            :column-size="tableHeadSizes"
            v-for="book in books"
            :key="book.id"
            :bg-color="book.bg"
        >
            <template #columns>
                <k-table-column>
                    {{ book.id }}
                </k-table-column>

                <k-table-column>
                    {{ book.author }}
                </k-table-column>

                <k-table-column>
                    {{ book.title }}
                </k-table-column>

                <k-table-column
                    image
                    :src-image="book.image"
                />

                <k-table-column style="display: flex; justify-content: center">
                    <k-btn
                        rounded
                        label="read it"
                    />
                </k-table-column>

            </template>
        </k-table-row>
    </k-table>
</template>

<script setup>
import { ref } from 'vue'
import KTable from '@/components/KTable/KTable.vue'
import KTableRow from '@/components/KTable/KTableRow.vue'
import KTableColumn from '@/components/KTable/KTableColumn.vue'
import KBtn from '@/components/KBtn/KBtn.vue'

const books = ref([
    {
        id: 1,
        author: 'Dmitry Glukhovsky',
        title: 'Metro 2033',
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81pNKLAG-cL._AC_UY436_FMwebp_QL65_.jpg',
        bg: '#FFA26B',
    },
    {
        id: 12,
        author: 'James Clear',
        title: 'Atomic Habits: An Easy',
        image: 'https://m.media-amazon.com/images/P/0735211299.01._SCLZZZZZZZ_SX500_.jpg',
        bg: '#00C48C',
    },
    {
        id: 2,
        author: 'J. K. Rowling',
        title: 'Harry Potter and the Order of the Phoenix',
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51bZujlJxlL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        bg: '#00C48C',
    },
])

const tableHeads = ['Id', 'Author', 'Title', 'Cover', '']
const tableHeadSizes = 'repeat(5, 1fr)'
</script>

<style scoped></style>
