# Next.js


### 什麼情況下用 Server Component v.s Client Component ?

>Server Component(後端渲染)
1. 一些敏感資訊需要被隱藏的話,不能讓別人知道的話 ex: API Keys
2. 資料庫需要連接



>Client Component(前端渲染)
1. 使用到 onClick()、onChange()
2. 使用到 useState()、useReducer()、useEffect()
3. 使用到 browser API

4. 在檔案上 + "use client" 就是一個 Client Component