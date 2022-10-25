<template>
  <button 
    class="ed-button"
    :class="[`ed-button--${type}`, {
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-disabled': disabled
    }]"
    :disabled="disabled"
    @click="handleClick"
  >
  <span><slot></slot></span>  
  </button>
</template>
<script>
import {defineEmits} from 'vue';
export default {
  name: 'ed-button',
  props: {
    type:{
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: ''
    },
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    disabled: Boolean,
  },
}
</script>

<script setup>

const emit = defineEmits(['click'])
const handleClick = (e) => {
  emit('click', e)
}
</script>
<style lang="scss">
.ed-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  // 禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.ed-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;

  &:hover,
  &:focus {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
}
.ed-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
}
.ed-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
}
.ed-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
}
.ed-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
} 


// 朴素的按钮
.ed-button.is-plain {
  &:hover,
  &:focus {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }
}
.ed-button--primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.ed-button--success.is-plain {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}

.ed-button--info.is-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.ed-button--warning.is-plain {
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;
  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.ed-button--danger.is-plain {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}

.ed-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}

// 原形按钮
.ed-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}

// 按钮后的文本
.ed-button [class*=ed-icon-]+span {
    margin-left: 5px;
}

// 禁用
.ed-button.is-disabled,
.ed-button.is-disabled:focus,
.ed-button.is-disabled:hover {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
}
.ed-button.is-disabled,
.ed-button.is-disabled:focus,
.ed-button.is-disabled:hover {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
}
.ed-button--primary.is-disabled,
.ed-button--primary.is-disabled:active,
.ed-button--primary.is-disabled:focus,
.ed-button--primary.is-disabled:hover {
    color: #fff;
    background-color: #a0cfff;
    border-color: #a0cfff;
}
.ed-button--success.is-disabled,
.ed-button--success.is-disabled:active,
.ed-button--success.is-disabled:focus,
.ed-button--success.is-disabled:hover {
    color: #fff;
    background-color: #b3e19d;
    border-color: #b3e19d;
}
.ed-button--info.is-disabled,
.ed-button--info.is-disabled:active,
.ed-button--info.is-disabled:focus,
.ed-button--info.is-disabled:hover {
    color: #fff;
    background-color: #c8c9cc;
    border-color: #c8c9cc;
}
.ed-button--warning.is-disabled,
.ed-button--warning.is-disabled:active,
.ed-button--warning.is-disabled:focus,
.ed-button--warning.is-disabled:hover {
    color: #fff;
    background-color: #f3d19e;
    border-color: #f3d19e;
}
.ed-button--danger.is-disabled,
.ed-button--danger.is-disabled:active,
.ed-button--danger.is-disabled:focus,
.ed-button--danger.is-disabled:hover {
    color: #fff;
    background-color: #fab6b6;
    border-color: #fab6b6;
}



</style>