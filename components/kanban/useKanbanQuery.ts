import {useQuery} from "@tanstack/vue-query";
import {DB} from "~/utils/appwrite";
import {COLLECTION_DEALS, DB_ID} from "~/app.constants";
import {KANBAN_DATA} from "~/components/kanban/kanban.data";
import type {ICard} from "~/components/kanban/kanban.types";
import type {IDeal} from "~/types/deals.types";

export function useKanbanQuery() {
    return useQuery({
        queryKey: ['deals'],
        queryFn: () => DB.listDocuments(DB_ID, COLLECTION_DEALS),
        select(data) {
            const newBoard = [...KANBAN_DATA];
            const deals = data.documents as IDeal[];
            console.log('useQuery',data, deals, newBoard);
        },
    });
}
