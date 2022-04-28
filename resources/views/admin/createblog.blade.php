@extends('layouts.admin')

@section('content')
    <form action="{{ route('createblog') }}" method="POST" enctype="multipart/form-data">
        <input type="hidden" name="id" value="{{ $blog ? $blog->id : null }}">
        @csrf
        <div>
            <x-label for="title" :value="__('Title')" />
            <x-input id="title" class="block mt-1 w-full" type="text" name="title" :value="$blog ? $blog->title : old('title')" required autofocus />
        </div>
        <div style="margin-bottom: 8px">
            <x-label for="content" :value="__('Content')" />
            <textarea name="content" id="" cols="30" rows="10"
                style="width: 100%">{{ $blog ? $blog->content : old('content') }}</textarea>
        </div>
        @if ($blog && $blog->image)
            <input type="hidden" value="{{ $blog->image }}" name="existedImage">
            <img src="{{ $blog->image }}" style="max-width: 100%; aspect-ratio: 16 / 9; object-fit: cover"
                class="uploaded-img mb-4" alt="{{ $blog->name }}">
        @endif
        <div>
            <x-label for="image" :value="__('Image')" />
            <x-input id="image" class="block mt-1 w-full" type="file" name="image" :value="old('image')" required autofocus />
        </div>
        <x-button style="margin: 16px 0">
            {{ __('Create') }}
        </x-button>
    </form>
@endsection
