# Button

```
我是 easy draw ui 的第一个组件 ed-button
<ed-button>我是按钮</ed-button>
谁会是第二个呢？？
我是 easy draw ui 的第二个组件 ed-xxx?
我是 easy draw ui 的第三个组件 ed-yyy?
```

```
<ed-button type="default">默认按钮</ed-button>
```

```
<ed-button type="warning" :circle="true" >圆形按钮</ed-button>
```

```
<ed-button type="primary" :plain="true">主色按钮</ed-button>
```

```
<ed-button :disabled="true">禁用</ed-button>
```

```
<ed-button type="success" :plain="true" >成功</ed-button>
```

```
<ed-button type="danger" :plain="true" :round="true" >圆形</ed-button>
```

<ed-button class="margin10" type="default">默认按钮</ed-button>
<ed-button class="margin10" type="warning" :circle="true" >圆形按钮</ed-button>
<ed-button class="margin10" type="primary" :plain="true">主色按钮</ed-button>
<ed-button class="margin10" :disabled="true">禁用</ed-button>
<ed-button class="margin10" type="success"  :plain="true" >成功</ed-button>
<ed-button class="margin10" type="danger" :plain="true" :round="true" >危险圆形</ed-button>
    
## 更多...
后续慢慢扩展 尽请期待！
...

<script setup>
</script>
<style>
.margin10{
    margin: 10px
}
</style>