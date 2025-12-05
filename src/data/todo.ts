import type { TodoConfig } from "@/types/config";

export const todoConfig: TodoConfig = {
    enable: true,
    title: "待办事项",
    items: [
        { content: "为博客添加”待办事项“功能", completed: true }，
        { content: "让我好兄弟叫我爷爷", completed: false },
    ],
};
