<script>
import Dropzone from 'dropzone';
Dropzone.autoDiscover = false;

export default {
  name: 'uploader',
  computed: {
    config() {
      return {
        accept: this.signature,
        acceptedFiles: this.accept,
        clickable: '.dz-message',
        method: 'put',
        parallelUploads: 1,
        sending(file, xhr) {
          xhr.setRequestHeader('Content-Type', file.type || 'application/octet-stream');
          let _send = xhr.send;
          xhr.send = () => _send.call(xhr, file);
        },
        url: '/',
        uploadMultiple: false,
      };
    },
  },
  data() {
    return {
      uploading: false,
    };
  },
  mounted() {
    // Instantiate Dropzone
    this.dropzone = new Dropzone(this.$el, this.config);

    // Set signed upload URL for each file
    this.dropzone.on('processing', file => {
      this.uploading = true;
      this.dropzone.options.url = file.uploadUrl;
    });

    this.dropzone.on('success', file => {
      this.uploading = false;
      let queueLength = this.dropzone.getQueuedFiles().length;
      this.dropzone.options.autoProcessQueue = !!queueLength;
    });

    this.dropzone.on('complete', file => {
      this.$emit('uploaded');
      this.dropzone.removeFile(file);
    });
  },
  props: {
    // Mimetype `video/mp4` or wildcard `image/*` files to accept upload.
    accept: String,
    // This is called with two parameters: `file` and `done`. The `file` object
    // should be modified with an `uploadUrl` in the form of a pre-signed S3
    // upload URL returned from the API. `done` may be called once ready.
    signature: Function,
  },
};
</script>

<template>
  <div class="dropzone-wrapper">
    <div id="prev-cont" class="dropzone-previews"></div>
    <form class="dropzone" v-show="!uploading">
      <div class="dz-message">
        <slot></slot>
      </div>
    </form>
  </div>
</template>

<style>
  .dropzone-wrapper {
    align-items: center;
    border: 2px solid var(--textColorDim);
    border-style: dashed;
    color: var(--textColorDim);
    cursor: pointer;
    display: flex;
    flex-direction: column-reverse;
    font-size: 80%;
    justify-content: center;
    letter-spacing: 0.09px;
    padding: 0;
    &.dz-drag-hover {
      border-color: var(--brand);
      color: var(--brand);
    }
  }
  form.dropzone {
    border: none;
  }
</style>
